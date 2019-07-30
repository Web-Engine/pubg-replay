const request = require('request-promise-native');
const express = require('express');
const app = express();
require('dotenv').config();
const apikey = process.env.API_KEY;


app.get('/player/:platform/:name', async (req, res) => {

    let response = await request.get({
        url: `https://api.pubg.com/shards/${req.params.platform}/players?filter[playerNames]=${req.params.name}`,
        headers: {
            'Authorization': `Bearer ${apikey}`,
            'Accept': 'application/json',
        },
    });

    let playerData = JSON.parse(response);
    let recentMatchData = playerData.data[0].relationships.matches.data;
    let match, reqMatchData = new Array(), matchData, index;
    let matchSolo = new Array(), matchDuo = new Array(), matchSquad = new Array(), matchUnknown = new Array();

    for (match of recentMatchData) {

        reqMatchData.push(request.get({
            url: `https://api.pubg.com/shards/${playerData.data[0].attributes.shardId}/matches/${match.id}`,
            headers: {
                'Authorization': `Bearer ${apikey}`,
                'Accept': 'application/json',
            },
        }));
    }

    resMatchData = await Promise.all(reqMatchData);

    for (index in resMatchData) {
        resMatchData[index] = JSON.parse(resMatchData[index]);
    }

    res.send(resMatchData);



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
