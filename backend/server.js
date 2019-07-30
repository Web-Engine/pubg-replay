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
    

});

const server = app.listen(process.env.SERVER_PORT, () => {
    console.log('Server started at port', server.address().port);
});