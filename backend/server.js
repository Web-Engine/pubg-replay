const request = require('request-promise-native');
const express = require('express');
const app = express();
require('dotenv').config();
const apikey = process.env.API_KEY;

app.get('/player/:platform/:name', async (req, res, next) => {

    let response = await request.get({
        url: `https://api.pubg.com/shards/${req.params.platform}/players?filter[playerNames]=${req.params.name}`,
        headers: {
            'Authorization': `Bearer ${apikey}`,
            'Accept': 'application/json',
        },
    });

    let playerData = JSON.parse(response);
    let recentMatchData = playerData.data[0].relationships.matches.data;
    let match, matchData, matchSolo = new Array(), matchDuo = new Array(), matchSquad = new Array(), matchUnknown = new Array();

    for (match of recentMatchData) {
        response = await request.get({
            url: `https://api.pubg.com/shards/${playerData.data[0].attributes.shardId}/matches/${match.id}`,
            headers: {
                'Authorization': `Bearer ${apikey}`,
                'Accept': 'application/json',
            },
        });

        matchData = JSON.parse(response);
        match.createdTime = matchData.data.attributes.createdAt;
        match.playTime = matchData.data.attributes.duration;
        match.map = matchData.data.attributes.mapName;

        switch (matchData.data.attributes.gameMode) {
            case "solo" :
                matchSolo.push(match);
                break;
            case "duo" :
                matchDuo.push(match);
                break;
            case "squad" :
                matchSquad.push(match);
                break;
            default :
                matchUnknown.push(matchData);
        }
    }
});

app.get('/matches/:platform/:id', async (req, res) => {

    let response = await request.get({
        url: `https://api.pubg.com/shards/${req.params.platform}/matches/${req.params.id}`,
        headers: {
            'Authorization': `Bearer ${apikey}`,
            'Accept': 'application/json',
        },
    });

    res.send(JSON.parse(response));

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
});

const server = app.listen(process.env.SERVER_PORT, () => {
    console.log('Server started at port', server.address().port);
});
