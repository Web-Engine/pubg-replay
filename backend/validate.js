// function check(data) {
//     let isArray = x => Array.isArray(x);
//     let isObject = x => typeof x === 'object' && !isArray(x) && x !== null;
//
//     if (!isObject(data)) {
//         throw 'Invalid json object';
//     }
//
//     let properties = {
//         'assets': isObject,
//         'game': isObject,
//         'canvas': isObject,
//         'characters': isArray,
//         'objects': isArray,
//         'ui': isArray,
//         'attacks': isArray,
//     };
//
//     for (let property in properties) {
//         if (!data.hasOwnProperty(property)) {
//             throw `Data should have ${property} property.`;
//         }
//
//         let checker = properties[property];
//         let value = data[property];
//         if (!checker(value)) {
//             throw `${property} is invalid.`;
//         }
//     }
//
//
// }
//
// try {
//     check(json);
//     console.log('Success');
// }
// catch (e) {
//     console.error('Error', e);
// }

let json = require('./normalized.json');

class ValidateError extends Error {
    constructor(message) {
        super(message);

        this.path = [];
    }
}

class PropertyNotFound extends ValidateError {
    constructor(parent, property) {
        super('Property not found');

        this.parent = parent;
        this.property = property;
    }
}

class InvalidProperty extends ValidateError {
    constructor(parent, property, value) {
        super('Invalid property');

        this.parent = parent;
        this.property = property;
        this.value = value;
    }
}

function isValid(data) {
    let isArray = x => Array.isArray(x);
    let isObject = x => typeof x === 'object' && !isArray(x) && x !== null;
    let isString = x => typeof x === 'string';
    let isNumber = x => typeof x === 'number';
    let isInteger = x => typeof x === 'number' && Number.isInteger(x);
    let isAssetId = x => isString(x) && x in data.assets;
    let isBoolean = x => typeof x === 'boolean';
    let isColor = x => isInteger(x) && 0 <= x && x <= 0xFFFFFF;
    let isEnum = (...args) => x => args.includes(x);


    if (!isObject(data)) {
        throw 'Invalid json object';
    }

    let makeChecker = base => {
        let getParent = path => {
            path = path.split('.');

            let parent = base;

            while (path.length > 1) {
                let property = path.shift();

                if (!(property in parent)) {
                    throw new PropertyNotFound(parent, property);
                }

                parent = parent[property];
            }

            return parent;
        };

        let get = path => {
            let parent = getParent(path);
            path = path.split('.');

            return parent[path.pop()];
        };

        let check = (path, validator) => {
            let value = get(path);

            if (!validator(value)) {
                throw new InvalidProperty(getParent(path), path, value);
            }
        };

        check.base = base;

        check.array = (path, callback) => {
            check(path, isArray);
            let array = get(path);

            for (let i = 0; i < array.length; i++) {
                let item = array[i];
                try {
                        let checker = makeChecker(item);

                        callback(checker);
                }
                catch (e) {
                    if (e instanceof ValidateError) {
                        e.path.unshift(`${path}[${i}]`);
                    }

                    throw e;
                }
            }
        };

        return check;
    };

    let check = makeChecker(data);
    check('assets', isObject);

    let timeFlowCheck = 0;

    for (let key in data.assets) {
        if (!data.assets.hasOwnProperty(key)) continue;

        check(`assets.${key}`, isString);
    }

    check('game', isObject);

    check('game.width', isNumber);
    check('game.height', isNumber);
    check('game.background', isObject);
    check('game.background.image', isAssetId);
    check('game.duration', isNumber);

    check('canvas', isObject);
    check('canvas.width', isInteger);
    check('canvas.height', isInteger);

    check.array('characters', check => {
        check('id', isString);
        check('name', isString);
        timeFlowCheck = 0;
        check.array('locations', check => {
            if (timeFlowCheck > check.base.elapsedTime) {
                throw new Error('time flow error');
            } else timeFlowCheck = check.base.elapsedTime;

            check('x', isNumber);
            check('y', isNumber);
            check('elapsedTime', isNumber);
            check('transition', isBoolean);
        });

        timeFlowCheck = 0;

        check.array('shapes', check => {
            if (timeFlowCheck > check.base.elapsedTime) {
                throw new Error('time flow error');
            } else timeFlowCheck = check.base.elapsedTime;

            check('type', isEnum('rectangle', 'ellipse', 'image'));
            check('width', isNumber);
            check('height', isNumber);
            check('fixSize', isBoolean);
            check('transition', isBoolean);
            check('elapsedTime', isNumber);

            switch (check.base.type)
            {
                case 'rectangle':
                case 'ellipse':
                    check('fillColor', isColor);
                    check('fillAlpha', isNumber);
                    check('lineColor', isColor);
                    check('lineAlpha', isNumber);
                    check('lineWidth', isNumber);
                    break;
                case 'image':
                    check('image', isAssetId);
                    break;
            }
        });
    });

    check.array('objects', check => {
        timeFlowCheck = 0;
        check.array('locations', check => {
            if (timeFlowCheck > check.base.elapsedTime) {
                throw new Error('time flow error');
            } else timeFlowCheck = check.base.elapsedTime;

            check('x', isNumber);
            check('y', isNumber);
            check('elapsedTime', isNumber);
        });
        timeFlowCheck = 0;
        check.array('shapes', check => {
            if (timeFlowCheck > check.base.elapsedTime) {
                throw new Error('time flow error');
            } else timeFlowCheck = check.base.elapsedTime;

            check('type', isEnum('rectangle', 'ellipse', 'image'));
            check('width', isNumber);
            check('height', isNumber);
            check('fixSize', isBoolean);
            check('transition', isBoolean);
            check('elapsedTime', isNumber);

            switch (check.base.type)
            {
                case 'rectangle':
                case 'ellipse':
                    check('fillColor', isColor);
                    check('fillAlpha', isNumber);
                    check('lineColor', isColor);
                    check('lineAlpha', isNumber);
                    check('lineWidth', isNumber);
                    break;
                case 'image':
                    check('image', isAssetId);
                    break;
            }
        });
        if (check.base.tooltips.length) {
            timeFlowCheck = 0;
            check.array('tooltips', check => {
                if (timeFlowCheck > check.base.elapsedTime) {
                    throw new Error('time flow error');
                } else timeFlowCheck = check.base.elapsedTime;

                check('text', isString);
                check('elapsedTime', isNumber);
            });
        }
    });

    check.array('ui', check => {
        timeFlowCheck = 0;
        check.array('positions', check => {
            if (timeFlowCheck > check.base.elapsedTime) {
                throw new Error('time flow error');
            } else timeFlowCheck = check.base.elapsedTime;

            check('x', isNumber);
            check('y', isNumber);
            check('elapsedTime', isNumber);
        });

        timeFlowCheck = 0;
        check.array('shapes', check => {
            if (timeFlowCheck > check.base.elapsedTime) {
                throw new Error('time flow error');
            } else timeFlowCheck = check.base.elapsedTime;

            check('type', isEnum('rectangle', 'ellipse', 'image'));
            check('width', isNumber);
            check('height', isNumber);
            check('fixSize', isBoolean);
            check('transition', isBoolean);
            check('elapsedTime', isNumber);

            switch (check.base.type)
            {
                case 'rectangle':
                case 'ellipse':
                    check('fillColor', isColor);
                    check('fillAlpha', isNumber);
                    check('lineColor', isColor);
                    check('lineAlpha', isNumber);
                    check('lineWidth', isNumber);
                    break;
                case 'image':
                    check('image', isAssetId);
                    break;
            }
        });

        timeFlowCheck = 0;
        check.array('texts', check => {
            if (timeFlowCheck > check.base.elapsedTime) {
                throw new Error('time flow error');
            } else timeFlowCheck = check.base.elapsedTime;

            check('text', isString);
            check('textColor', isColor);
            check('textAlpha', isNumber);
            check('textSize', isNumber);
            check('elapsedTime', isNumber);
        })
    });

    timeFlowCheck = 0;
    check.array('attacks', check => {
        if (timeFlowCheck > check.base.elapsedTime) {
            throw new Error('time flow error');
        } else timeFlowCheck = check.base.elapsedTime;
        
        check('type', isEnum('line', 'bullet'));
        check('duration', isNumber);
        check('fixDuration', isBoolean);
        check('elapsedTime', isNumber);
        check('attacker', isObject);
        check('attacker.x', isNumber);
        check('attacker.y', isNumber);
        check('target', isObject);
        check('target.x', isNumber);
        check('target.y', isNumber);
        switch (check.base.type) {
            case 'line':
                check('shape', isObject);
                check('shape.lineWidth', isNumber);
                check('shape.lineColor', isNumber);
                check('shape.lineAlpha', isNumber);
                break;
            case 'bullet':
                check('shape', isObject);
                check('shape.type', isEnum('rectangle', 'ellipse', 'image'));
                check('shape.width', isNumber);
                check('shape.height', isNumber);
                check('shape.fixSize', isBoolean);
                switch (check.base.shape.type) {
                    case 'rectangle':
                    case 'ellipse':
                        check('shape.fillColor', isColor);
                        check('shape.fillAlpha', isNumber);
                        check('shape.lineColor', isColor);
                        check('shape.lineAlpha', isNumber);
                        check('shape.lineWidth', isNumber);
                        break;
                    case 'image':
                        check('shape.image', isAssetId);
                        break;
                }
                break;
        }
    });
}

try {
    isValid(json);
    console.log('Success');
}
catch (e) {
    if (e instanceof ValidateError) {
        console.log(e.message + ':', e.path.join('.') + '.' + e.property);

        console.log('parent:', e.parent);
        console.log('value:', e.value);
    }
    else {
        console.error('Error', e);
    }
}
