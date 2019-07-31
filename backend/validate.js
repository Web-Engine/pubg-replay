exports.validate = (data) => {

    let checkTopProperty = (property) => !data.hasOwnProperty(property);
    let checkSecondProperty = (topProperty, secondProperty) =>
        !data[topProperty].hasOwnProperty(secondProperty);
    let checkThirdProperty = (topProperty, secondProperty, thirdProperty) =>
        !data[topProperty][secondProperty].hasOwnProperty(thirdProperty);
    let assets = data.assets;

    if (checkTopProperty('assets')) throw new Error('Data does not contain assets property');
    if (checkTopProperty('canvas')) throw new Error('Data does not contain canvas property');
    if (checkTopProperty('game')) throw new Error('Data does not contain game property');
    if (checkTopProperty('characters')) throw new Error('Data does not contain characters property');
    if (checkTopProperty('objects')) throw new Error('Data does not contain objects property');
    if (checkTopProperty('ui')) throw new Error('Data does not contain ui property');
    if (checkTopProperty('attacks')) throw new Error('Data does not contain attacks property');

    if (checkSecondProperty('canvas', 'width')
        || checkSecondProperty('canvas', 'height') ) {
        throw new Error('canvas does not contain essential property');
    }

    if (checkSecondProperty('game', 'background') ||
        checkSecondProperty('game', 'duration') ||
        checkSecondProperty('game', 'width') ||
        checkSecondProperty('game', 'height') ||
        checkThirdProperty('game', 'background', 'image')) {
        throw new Error('game does not contain essential property');
    }
    if (!assets.hasOwnProperty(data.game.background.image)) {
        throw new Error('Cannot found background assets');
    }

    if (checkSecondProperty('characters', 'id') ||
        checkSecondProperty('characters', 'name') ||
        checkSecondProperty('characters', 'team') ||
        checkSecondProperty('characters', 'locations') ||
        checkSecondProperty('characters', 'shapes')) {
        throw new Error('characters does not contain essential property');
    }

}
