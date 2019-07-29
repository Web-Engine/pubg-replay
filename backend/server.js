const request = require('request-promise-native');
const express = require('express');
const app = express();
const apikey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5NTdhZTMzMC05NDBiLTAxMzctY2NhZi0wMTlhZmY3MjIwZWIiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTY0MzkwMTE5LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImppbnN1MjUwNC1uYXZlIn0.Zpcy7YdOvjzuN2889h0YMwoqRfpgiFH4558CvQJeqHo';

app.get('/player/:name', async (req, res, next) => {

    let response = await request.get({
        url: `https://api.pubg.com/shards/steam/players?filter[playerNames]=${req.params.name}`,
        headers: {
            'Authorization': `Bearer ${apikey}`,
            'Accept': 'application/json',
        },
    });

    res.send(JSON.parse(response));

});

app.get('/matches/:id', async (req, res) => {

    let response = await request.get({
        url: `https://api.pubg.com/shards/steam/matches/${req.params.id}`,
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

    res.send(JSON.parse(response));
});

const server = app.listen(3000, () => {
    console.log('Server started at port', server.address().port);
});
