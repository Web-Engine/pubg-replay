require('dotenv').config();

const request = require('request-promise-native');
const express = require('express');
const app = express();

const normalizeData = require('./normalize-data');

const API_KEY = process.env.API_KEY;

app.get('/matches/:platform/:match_id', async (req, res) => {
    let { platform, match_id } = req.params;

    let response = await request.get({
        url: `https://api.pubg.com/shards/${platform}/matches/${match_id}`,
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Accept': 'application/json',
        },
    });

    let responseJSON = JSON.parse(response);
    let telemetryID = responseJSON.data.relationships.assets.data[0].id;
    let telemetryURL = responseJSON.included.find(data => data.id === telemetryID).attributes.URL;

    response = await request.get({
        url:  telemetryURL,
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Accept': 'application/json',
        },
        gzip: true,
    });

    let telemetryData = JSON.parse(response);
    let output = normalizeData(telemetryData);

    res.send(output);
});

const server = app.listen(process.env.SERVER_PORT, () => {
    console.log('Server started at port', server.address().port);
});
