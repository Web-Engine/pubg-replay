class ValidateError extends Error {
    constructor(path, message) {
        super(message);

        this.path = path;
    }
}

class PropertyNotFound extends ValidateError {
    constructor(path) {
        super(path);
    }

    get message() {
        return `Property not found: ${this.path}`;
    }
}

class InvalidProperty extends ValidateError {
    constructor(path, data, expect) {
        super(path);

        this.expect = expect;
        this.data = data;
    }

    get message() {
        return `Invalid Property: ${this.path}, expect '${this.expect}' but got '${typeof this.data}'(value: '${this.data}')`
    }
}

const Errors = {
    PropertyNotFound,
};

const Validators = {
    integer: {
        validate: v => typeof v === 'number' && Number.isInteger(v),
        expect: 'integer',
    },
    number: {
        validate: v => typeof v === 'number' && Number.isFinite(v),
        expect: 'number',
    },
    string: {
        validate: v => typeof v === 'string',
        expect: 'string',
    },
    object: {
        validate: v => typeof v === 'object' && !Array.isArray(v),
        expect: 'object',
    },
    array: {
        validate: v => typeof v === 'object' && Array.isArray(v),
        expect: 'array',
    },
    boolean: {
        validate: v => typeof v === 'boolean',
        expect: 'boolean',
    },
};

function find(baseData, path) {
    let data = baseData;
    let paths = path.split('.');

    for (let i = 0; i < paths.length; i++) {
        let path = paths[i];

        if (!(path in data)) {
            let currentPath = paths.slice(0, i + 1).join('.');

            throw new PropertyNotFound(currentPath);
        }

        data = data[path];
    }

    return data;
}

function normalizeValidators(validators) {
    if (!Array.isArray(validators)) {
        return normalizeValidators([ validators ]);
    }

    return validators.map(validator => {
        if (typeof validator === 'string' && validator in Validators) {
            return Validators[validator];
        }

        if (!isValidator(validator)) {
            throw new Error('Invalid validator');
        }

        return validator;
    });
}

function isValidator(validator) {
    return typeof validator === 'object' && validator !== null && typeof validator.expect === 'string' && typeof validator.validate === 'function';
}

function checkValidates(basePath, data, validators) {
    validators = normalizeValidators(validators);

    try {
        validators.forEach(validator => {
            if (typeof validator === 'object') {
                if (validator.validate(data)) return;

                throw validator.expect;
            }

            if (validator(data)) return;

            throw ''; // no expect data
        });
    }
    catch (e) {
        let expect;

        if (typeof e.type === 'string') {
            expect = e.type;
        }
        else if (typeof e.message === 'string') {
            expect = e.message;
        }
        else {
            expect = String(e);
        }

        throw new InvalidProperty(basePath, data, expect);
    }
}

function checker(baseData, basePath = '${ROOT}') {
    let check = function (path, validators) {
        let data = find(baseData, path);

        checkValidates(basePath, data, validators);

        return data;
    };

    check.baseData = baseData;
    check.basePath = basePath;

    check.self = function (validators) {
        checkValidates(basePath, baseData, validators);

        return baseData;
    };

    check.array = function (path, callback) {
        let data = check(path, Validators.array);

        data.forEach((item, index) => {
            let itemPath = `${path}[${index}]`;

            let check = checker(item, `${path}[${index}]`);

            try {
                callback(check, baseData, index, basePath);
            }
            catch (e) {
                if (!(e instanceof ValidateError)) {
                    let message = e.message || String(e);

                    throw new ValidateError(`${basePath}.${itemPath}`, item, message);
                }

                e.path = `${basePath}.${e.path}`;
                throw e;
            }
        });

        return data;
    };

    check.object = function (path, callback) {
        let data = check(path, Validators.object);

        for (let key in data) {
            if (!Object.prototype.hasOwnProperty.call(data, key)) continue;

            let itemPath = `${path}.${key}`;

            let item = data[key];
            let check = checker(item, itemPath);

            try {
                callback(check, item, key, basePath);
            }
            catch (e) {
                if (!(e instanceof ValidateError)) {
                    let message = e.message || String(e);

                    throw new ValidateError(`${basePath}.${itemPath}`, item, message);
                }

                e.path = `${basePath}.${e.path}`;
                throw e;
            }
        }

        return data;
    };

    return check;
}

module.exports = {
    checker,
    Validators,
    Errors,
};