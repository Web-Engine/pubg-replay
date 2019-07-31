const mapSizes = {
    Desert_Main: 800000,
    DihorOtok_Main: 600000,
    Erangel_Main: 800000,
    Range_Main: 200000,
    Savage_Main: 400000,
};

function back(array, index) {
    if (array.length <= index) return null;

    return array[array.length - index - 1];
}

function last(array) {
    return back(array, 0);
}

function isPointEqual(a, b) {
    if (a === b) return true;
    if (!a || !b) return false;

    return a.x === b.x && a.y === b.y;
}

module.exports = function(logs) {
    function isCharacter(character) {
        return character && character.accountId;
    }

    function getCharacter(accountId) {
        if (accountId in charactersById) {
            return charactersById[accountId];
        }

        charactersById[accountId] = {
            id: accountId,
            name: null,
            team: 0,
            locations: [],
            shapes: [
                {
                    ...CharacterAliveShape,
                    transition: false,
                    elapsedTime: 0,
                },
            ],
        };

        return charactersById[accountId];
    }

    function addCharacterLocation(data, elapsedTime) {
        let character = getCharacter(data.accountId);
        let lastLocation = last(character.locations);

        if (isPointEqual(lastLocation, data.location)) return;

        let { x, y } = data.location;
        character.locations.push({
            x, y,
            elapsedTime,
            transition: true,
        });
    }

    // function addCharacterHealth(data, health, elapsedTime) {
    //     let character = getCharacter(data.accountId);
    //
    //     let lastHealth = last(character.healths);
    //     if (lastHealth.health === health) return;
    //
    //     character.healths.push({
    //         health,
    //         elapsedTime,
    //     });
    // }

    function addCharacterShape(data, shape, elapsedTime) {
        let character = getCharacter(data.accountId);

        character.shapes.push({
            ...shape,
            transition: false,
            elapsedTime,
        });
    }

    function addWhiteCircle({ x, y }, radius, elapsedTime) {
        whiteCircle.locations.push({
            x, y,
            elapsedTime,
        });

        whiteCircle.shapes.push({
            type: 'ellipse',
            width: radius * 2,
            height: radius * 2,
            fillColor: 0x000000,
            fillAlpha: 0,
            lineColor: 0xFFFFFF,
            lineWidth: 1,
            lineAlpha: 1,
            transition: false,
            elapsedTime,
        });
    }

    function addSafetyZone({ x, y }, radius, elapsedTime) {
        safetyZone.locations.push({
            x, y,
            elapsedTime,
            transition: true,
        });

        safetyZone.shapes.push({
            type: 'ellipse',
            width: radius * 2,
            height: radius * 2,
            fillColor: 0x000000,
            fillAlpha: 0,
            lineColor: 0x0000FF,
            lineWidth: 1,
            lineAlpha: 1,
            transition: true,
            elapsedTime,
        });
    }

    function addRedZone({ x, y }, radius, elapsedTime) {
        redZone.locations.push({
            x, y,
            elapsedTime,
        });

        redZone.shapes.push({
            type: 'ellipse',
            width: radius * 2,
            height: radius * 2,
            fillColor: 0xFF0000,
            fillAlpha: 0.3,
            lineColor: 0,
            lineWidth: 0,
            lineAlpha: 0,
            transition: false,
            elapsedTime,
        });
    }

    function addAlivePlayers(numAlivePlayers, elapsedTime) {
        if (alivePlayersUI.texts[alivePlayersUI.texts.length - 1].text === String(numAlivePlayers)) return;

        alivePlayersUI.texts.push({
            text: String(numAlivePlayers),
            textColor: 0xFFFFFF,
            textAlpha: 1,
            textSize: 30,
            elapsedTime,
        });
    }

    function addPlayerAttack(attacker, target, elapsedTime) {
        if (attacker === null) return;

        attacks.push({
            type: 'bullet',
            attacker: {
                x: attacker.location.x,
                y: attacker.location.y,
            },
            target: {
                x: target.location.x,
                y: target.location.y,
            },
            shape: {
                type: 'ellipse',
                width: 5,
                height: 5,
                fixSize: true,
                fillColor: 0xffffff,
                fillAlpha: 1,
                lineColor: 0xffffff,
                lineAlpha: 0,
                lineWidth: 0,
            },
            duration: 300,
            fixDuration: true,
            elapsedTime: elapsedTime,
        });
    }

    if (!Array.isArray(logs)) {
        throw 'Invalid replay file format: replay file should be json array';
    }

    let startIndex = logs.findIndex(log => log._T === 'LogMatchStart');
    if (startIndex === -1) {
        throw 'Cannot found match start data';
    }

    logs.splice(0, startIndex);

    let matchStart = logs.shift();
    let mapSize = mapSizes[matchStart.mapName];

    let startTime = getTime(matchStart._D);

    let game = {
        background: {
            image: 'background',
        },
        duration: 0,
        width: mapSize,
        height: mapSize,
    };

    let charactersById = {};

    const CharacterAliveShape = {
        type: 'ellipse',
        width: 10,
        height: 10,
        fixSize: true,
        lineWidth: 1,
        lineColor: 0x000000,
        lineAlpha: 1,
        fillColor: 0xFFFFFF,
        fillAlpha: 1,
    };
    const CharacterGroggyShape = {
        type: 'ellipse',
        width: 10,
        height: 10,
        fixSize: true,
        lineWidth: 1,
        lineColor: 0x000000,
        lineAlpha: 1,
        fillColor: 0xFFFF00,
        fillAlpha: 1,
    };
    const CharacterDeadShape = {
        type: 'ellipse',
        width: 10,
        height: 10,
        fixSize: true,
        lineWidth: 1,
        lineColor: 0x000000,
        lineAlpha: 1,
        fillColor: 0xFF0000,
        fillAlpha: 1,
    };

    let attacks = [];
    let alivePlayersUI = {
        positions: [{
            x: 30,
            y: 30,
            elapsedTime: 0,
        }],
        shapes: [{
            type: 'rectangle',
            width: 70,
            height: 70,
            fillColor: 0x000000,
            fillAlpha: 0.8,
            lineWidth: 0,
            lineAlpha: 0,
            lineColor: 0x000000,
            elapsedTime: 0,
        }],
        texts: [
            {
                text: String(matchStart.characters.length),
                textColor: 0xFFFFFF,
                textAlpha: 1,
                textSize: 30,
                elapsedTime: 0,
            },
        ],
    };

    let whiteCircle = {
        locations: [],
        shapes: [],
    };

    let safetyZone = {
        locations: [],
        shapes: [],
    };

    let redZone = {
        locations: [],
        shapes: [],
    };

    let carePackages = [];
    let carePackageLandIndex = 0;

    for (let character of matchStart.characters) {
        addCharacterLocation(character, 0);
    }

    for (let log of logs) {
        let type = log._T;
        let logTime = getTime(log._D);
        let elapsedTime = logTime - startTime;

        switch (type) {
            case 'LogArmorDestroy': {
                if (isCharacter(log.attacker)) {
                    addCharacterLocation(log.attacker, elapsedTime);
                }

                addCharacterLocation(log.victim, elapsedTime);
                break;
            }

            case 'LogCarePackageLand': {
                let itemPackage = log.itemPackage;
                let { x, y } = itemPackage.location;

                let carePackage = carePackages[carePackageLandIndex];

                carePackage.locations.push({
                    x, y,
                    elapsedTime
                });

                carePackage.shapes.push({
                    type: 'image',
                    image: 'carePackageLand',
                    width: 20,
                    height: 20,
                    fixSize: true,
                    elapsedTime,
                });

                carePackageLandIndex++;
                break;
            }

            case 'LogCarePackageSpawn': {
                let itemPackage = log.itemPackage;

                let { x, y } = itemPackage.location;

                // let items = itemPackage.items;
                // for (let item of items) {
                //     item.itemName = itemNames[item.itemId];
                // }

                carePackages.push({
                    locations: [
                        {
                            x, y,
                            elapsedTime,
                        },
                    ],
                    shapes: [
                        {
                            type: 'image',
                            image: 'carePackageFlying',
                            width: 30,
                            height: 40,
                            fixSize: true,
                            elapsedTime,
                        },
                    ],
                });

                break;
            }

            case 'LogGameStatePeriodic': {
                let gameState = log.gameState;

                addWhiteCircle(gameState.poisonGasWarningPosition, gameState.poisonGasWarningRadius, elapsedTime);
                addSafetyZone(gameState.safetyZonePosition, gameState.safetyZoneRadius, elapsedTime);
                addRedZone(gameState.redZonePosition, gameState.redZoneRadius, elapsedTime);
                addAlivePlayers(gameState.numAlivePlayers, elapsedTime);
                break;
            }

            case 'LogHeal': {
                addCharacterLocation(log.character, elapsedTime);
                // addPlayerHealth(log.character, log.character.health, enums.PlayerState.ALIVE, elapsedTime);
                // addCharacterHealth(log.character, log.character.health, elapsedTime);
                addCharacterShape(log.character, CharacterAliveShape, elapsedTime);
                break;
            }

            case 'LogItemAttach': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogItemDetach': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogItemDrop': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogItemEquip': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogItemPickup': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogItemPickupFromCarepackage': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogItemPickupFromLootbox': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogItemUnequip': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogItemUse': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogMatchDefinition': {
                break;
            }

            case 'LogMatchEnd': {
                for (let data of log.characters) {
                    let character = getCharacter(data.accountId);

                    character.name = data.name;
                    character.team = String(data.teamId);
                }

                game.duration = elapsedTime;
                break;
            }

            case 'LogObjectDestroy': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogParachuteLanding': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogPlayerAttack': {
                if (isCharacter(log.attacker)) {
                    addCharacterLocation(log.attacker, elapsedTime);
                }

                break;
            }

            case 'LogPlayerCreate': {
                break;
            }

            case 'LogPlayerKill': {
                // if (isCharacter(log.killer)) {
                //     addCharacterLocation(log.killer, elapsedTime);
                // }

                addCharacterLocation(log.victim, elapsedTime);
                // addPlayerHealth(log.victim, 0, enums.PlayerState.DEAD, elapsedTime);
                // addCharacterHealth(log.victim, 0, elapsedTime);
                addCharacterShape(log.victim, CharacterDeadShape, elapsedTime);

                // if (isCharacter(log.assistant)) {
                //     addCharacterLocation(log.assistant, elapsedTime);
                // }
                break;
            }

            case 'LogPlayerLogin': {
                break;
            }

            case 'LogPlayerLogout': {
                break;
            }

            case 'LogPlayerMakeGroggy': {
                if (isCharacter(log.attacker)) {
                    addCharacterLocation(log.attacker, elapsedTime);
                }

                addCharacterLocation(log.victim, elapsedTime);
                // addPlayerHealth(log.victim, 0, enums.PlayerState.GROGGY, elapsedTime);
                // addCharacterHealth(log.victim, 0, elapsedTime);
                addCharacterShape(log.victim, CharacterGroggyShape, elapsedTime);
                break;
            }

            case 'LogPlayerPosition': {
                addCharacterLocation(log.character, elapsedTime);
                addAlivePlayers(log.numAlivePlayers, elapsedTime);
                break;
            }

            case 'LogPlayerRevive': {
                addCharacterLocation(log.reviver, elapsedTime);
                addCharacterLocation(log.victim, elapsedTime);

                // addPlayerHealth(log.victim, log.victim.health, enums.PlayerState.ALIVE, elapsedTime);
                // addCharacterHealth(log.victim, log.victim.health, elapsedTime);
                addCharacterShape(log.victim, CharacterAliveShape, elapsedTime);
                break;
            }

            case 'LogPlayerTakeDamage': {
                if (isCharacter(log.attacker)) {
                    addCharacterLocation(log.attacker, elapsedTime);
                }

                addCharacterLocation(log.victim, elapsedTime);
                // addPlayerHealth(log.victim, log.victim.health - log.damage, null, elapsedTime);
                // addCharacterHealth(log.victim, log.victim.health - log.damage, elapsedTime);
                // addCharacterShape(log.victim, CharacterAliveShape, elapsedTime);
                addPlayerAttack(log.attacker, log.victim, elapsedTime);
                break;
            }

            case 'LogRedZoneEnded': {
                for (let driver of log.drivers) {
                    addCharacterLocation(driver, elapsedTime);
                }
                break;
            }

            case 'LogSwimEnd': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogSwimStart': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogVaultStart': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogVehicleDestroy': {
                if (isCharacter(log.attacker)) {
                    addCharacterLocation(log.attacker, elapsedTime);
                }

                break;
            }

            case 'LogVehicleLeave': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogVehicleRide': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogWeaponFireCount': {
                addCharacterLocation(log.character, elapsedTime);
                break;
            }

            case 'LogWheelDestroy': {
                if (isCharacter(log.attacker)) {
                    addCharacterLocation(log.attacker, elapsedTime);
                }

                break;
            }
        }
    }

    return {
        assets: {
            background: "assets/maps/Sanhok_Main_Low_Res.png",
            carePackageFlying: "assets/icons/CarePackage_Flying.png",
            carePackageLand: "assets/icons/CarePackage_Normal.png",
        },
        canvas: {
            width: 800,
            height: 800,
        },
        game,
        characters: [
            ...Object.values(charactersById),
        ],
        objects: [
            whiteCircle,
            redZone,
            safetyZone,
            ...carePackages,
        ],
        ui: [
            alivePlayersUI,
        ],
        attacks: [
            ...attacks,
        ],
    };
};

function getTime(str) {
    return new Date(str).getTime();
}
