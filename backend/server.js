const request = require('request-promise-native');
const express = require('express');
const app = express();
require('dotenv').config();
const apikey = process.env.API_KEY;

app.get('/matches/:platform/:id', async (req, res) => {

    let response = await request.get({
        url: `https://api.pubg.com/shards/${req.params.platform}/matches/${req.params.id}`,
        headers: {
            'Authorization': `Bearer ${apikey}`,
            'Accept': 'application/json',
        },
    });

    let resObject = JSON.parse(response);
    let telemetryID = resObject.data.relationships.assets.data[0].id;
    let index = resObject.included.findIndex(data => data.id === telemetryID);
    let telemetryURL = resObject.included[index].attributes.URL;

    response = await request.get({
        url:  telemetryURL,
        headers: {
            'Authorization': `Bearer ${apikey}`,
            'Accept': 'application/json',
        },
        gzip: true,
    });

    let telemetryData = JSON.parse(response);
    let formatData = new Object();

    {
        let i;
        for (i = 0; i < telemetryData.length; i++) {
            if (telemetryData[i]._T === 'LogMatchStart') break;
        }

        telemetryData.splice(0, i);
    }

    let matchStart = telemetryData.shift();

    function back(array, index) {
        if (array.length <= index) return null;

        return array[array.length - index - 1];
    }

    function last(array) {
        return back(array, 0);
    }

    function isLocationEqual(a, b) {
        if (a === b) return true;
        if (!a || !b) return false;

        return a.x === b.x && a.y === b.y;
    }

    function normalizeData(logs) {
        function isPlayer(character) {
            return character && character.accountId;
        }

        function getPlayer(accountId) {
            if (accountId in newData.players) {
                return newData.players[accountId];
            }

            newData.players[accountId] = {
                id: accountId,
                name: null,
                team: 0,
                locations: [],
                healths: [
                    {
                        health: 100,
                        elapsedTime: 0,
                    },
                ],
                shapes: [
                    {
                        type: 'ellipse',
                        width: 20,
                        height: 20,
                        fillColor: 16777215,
                        fillAlpha: 1,
                        lineColor: 16711680,
                        lineAlpha: 1,
                        elapsedTime: 0,
                    },
                ],

                manas: [
                    {
                        mana: 0,
                        elapsedTime: 0,
                    },
                ],

                uses: [
                    {
                        image: '',
                        duration: 0,
                        elapsedTime: 0,
                    },
                ],

                buffs: [
                    {
                        image: '',
                        duration: 0,
                        elapsedTime: 0,
                    },
                ],

                items: [
                    {
                        items: [
                            {
                                name: 'Item Name',
                                image: 'Image',
                            },
                        ],
                        elapsedTime: 0,
                    },
                ],
            };

            return newData.players[accountId];
        }

        function addPlayerLocation(character, elapsedTime) {
            let player = getPlayer(character.accountId);
            let lastLocation = last(player.locations);

            if (isLocationEqual(lastLocation, character.location)) return;

            let { x, y } = character.location;

            player.locations.push({
                x,
                y,
                elapsedTime,
            });
        }

        function addPlayerHealth(character, health, elapsedTime) {
            let player = getPlayer(character.accountId);

            player.healths.push({
                health,
                elapsedTime,
            });
        }

        if (logs.length === 0) {
            throw 'Cannot found match start data';
        }

        let newData = { players: {} };

        for (let character of matchStart.characters) {
            addPlayerLocation(character, 0);
        }

        let startTime = getTime(matchStart._D);

        for (let log of logs) {
            let type = log._T;
            let logTime = getTime(log._D);
            let elapsedTime = logTime - startTime;

            switch (type) {
                case 'LogArmorDestroy': {
                    if (isPlayer(log.attacker)) {
                        addPlayerLocation(log.attacker, elapsedTime);
                    }

                    addPlayerLocation(log.victim, elapsedTime);
                    break;
                }

                case 'LogHeal': {
                    addPlayerLocation(log.character, elapsedTime);
                    addPlayerHealth(log.character, log.character.health, elapsedTime);
                    break;
                }

                case 'LogItemAttach': {
                    addPlayerLocation(log.character, elapsedTime);
                    break;
                }

                case 'LogItemDetach': {
                    addPlayerLocation(log.character, elapsedTime);
                    break;
                }

                case 'LogItemDrop': {
                    addPlayerLocation(log.character, elapsedTime);
                    break;
                }

                case 'LogItemEquip': {
                    addPlayerLocation(log.character, elapsedTime);
                    break;
                }

                case 'LogItemPickup': {
                    addPlayerLocation(log.character, elapsedTime);
                    break;
                }

                case 'LogItemPickupFromCarepackage': {
                    addPlayerLocation(log.character, elapsedTime);
                    break;
                }

                case 'LogItemPickupFromLootbox': {
                    addPlayerLocation(log.character, elapsedTime);
                    break;
                }

                case 'LogItemUnequip': {
                    addPlayerLocation(log.character, elapsedTime);
                    break;
                }

                case 'LogItemUse': {
                    addPlayerLocation(log.character, elapsedTime);
                    break;
                }

                case 'LogMatchDefinition': {
                    break;
                }

                case 'LogMatchEnd': {
                    for (let character of log.characters) {
                        let player = getPlayer(character.accountId);

                        player.name = character.name;
                        player.team = character.teamId;
                    }
                    break;
                }

                case 'LogObjectDestroy': {
                    addPlayerLocation(log.character, elapsedTime);
                    break;
                }

                case 'LogParachuteLanding': {
                    addPlayerLocation(log.character, elapsedTime);
                    break;
                }

                case 'LogPlayerAttack': {
                    if (isPlayer(log.attacker)) {
                        addPlayerLocation(log.attacker, elapsedTime);
                    }

                    break;
                }

                case 'LogPlayerCreate': {
                    break;
                }

                case 'LogPlayerKill': {
                    if (isPlayer(log.killer)) {
                        addPlayerLocation(log.killer, elapsedTime);
                    }

                    addPlayerLocation(log.victim, elapsedTime);
                    addPlayerHealth(log.victim, 0, elapsedTime);

                    if (isPlayer(log.assistant)) {
                        addPlayerLocation(log.assistant, elapsedTime);
                    }
                    break;
                }

                case 'LogPlayerLogin': {
                    break;
                }

                case 'LogPlayerLogout': {
                    break;
                }

                case 'LogPlayerMakeGroggy': {
                    if (isPlayer(log.attacker)) {
                        addPlayerLocation(log.attacker, elapsedTime);
                    }

                    addPlayerLocation(log.victim, elapsedTime);
                    addPlayerHealth(log.victim, 0, elapsedTime);
                    break;
                }

                case 'LogPlayerPosition': {
                    addPlayerLocation(log.character, elapsedTime);
                    break;
                }

                case 'LogPlayerRevive': {
                    addPlayerLocation(log.reviver, elapsedTime);
                    addPlayerLocation(log.victim, elapsedTime);

                    addPlayerHealth(log.victim, log.victim.health, elapsedTime);
                    break;
                }

                case 'LogPlayerTakeDamage': {
                    if (isPlayer(log.attacker)) {
                        addPlayerLocation(log.attacker, elapsedTime);
                    }

                    addPlayerLocation(log.victim, elapsedTime);
                    addPlayerHealth(log.victim, log.victim.health - log.damage, elapsedTime);
                    break;
                }

                case 'LogRedZoneEnded': {
                    for (let driver of log.drivers) {
                        addPlayerLocation(driver, elapsedTime);
                    }
                    break;
                }

                case 'LogSwimEnd': {
                    addPlayerLocation(log.character, elapsedTime);
                    break;
                }

                case 'LogSwimStart': {
                    addPlayerLocation(log.character, elapsedTime);
                    break;
                }

                case 'LogVaultStart': {
                    addPlayerLocation(log.character, elapsedTime);
                    break;
                }

                case 'LogVehicleDestroy': {
                    if (isPlayer(log.attacker)) {
                        addPlayerLocation(log.attacker, elapsedTime);
                    }

                    break;
                }

                case 'LogVehicleLeave': {
                    addPlayerLocation(log.character, elapsedTime);
                    break;
                }

                case 'LogVehicleRide': {
                    addPlayerLocation(log.character, elapsedTime);
                    break;
                }

                case 'LogWeaponFireCount': {
                    addPlayerLocation(log.character, elapsedTime);
                    break;
                }

                case 'LogWheelDestroy': {
                    if (isPlayer(log.attacker)) {
                        addPlayerLocation(log.attacker, elapsedTime);
                    }

                    break;
                }

                default: {
                    break;
                }
            }
        }
        return newData;
    }

    function getTime(str) {
        return new Date(str).getTime();
    }

    let playerData = normalizeData(telemetryData);

    let playerArr = [];

    for (let player in playerData.players) {
        playerArr.push(playerData.players[player]);
    }

    formatData = {
        assets: {
            background: matchStart.mapName,
        },
    };

    formatData.players = playerArr;

    res.send(formatData);

});

const server = app.listen(process.env.SERVER_PORT, () => {
    console.log('Server started at port', server.address().port);
});
