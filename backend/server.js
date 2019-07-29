const request = require('request-promise-native');
const express = require('express');
const app = express();

app.get('/player/:name', async (req, res, next) => {

    let response = await request.get({
        url: `https://api.pubg.com/shards/steam/players?filter[playerNames]=${req.params.name}`,
        headers: {
            'Authorization': '',
            'Accept': 'application/json',
        },
    });

});

app.get('/matches/:id', async (req, res) => {

    let response = await request.get({
        url: `https://api.pubg.com/shards/steam/matches/${req.params.id}`,
        headers: {
            'Authorization': '',
            'Accept': 'application/json',
        },
    });

    let resObject = JSON.parse(response);
    let telementryID = resObject.data.relationships.assets.data[0].id;
    let telementryURL = resObject.included[resObject.included.findIndex((data) => {
        return data.id === telementryID;
    })].attributes.URL;

    response = await request.get({
        url:  telementryURL,
        headers: {
            'Authorization': '',
            'Accept': 'application/json',
        },
        gzip: true,
    });
});

const server = app.listen(8080, () => {
    console.log('Server started at port', server.address().port);
});


