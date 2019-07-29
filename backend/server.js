const request = require('request-promise-native');
const express = require('express');
const app = express();
const apikey = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5NTdhZTMzMC05NDBiLTAxMzctY2NhZi0wMTlhZmY3MjIwZWIiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTY0MzkwMTE5LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImppbnN1MjUwNC1uYXZlIn0.Zpcy7YdOvjzuN2889h0YMwoqRfpgiFH4558CvQJeqHo';

app.get('/player/:name', async (req, res, next) => {

    let response = await request.get({
        url: `https://api.pubg.com/shards/steam/players?filter[playerNames]=${req.params.name}`,
        headers: {
            'Authorization': apikey,
            'Accept': 'application/json',
        }
    });

    res.send(JSON.parse(response));

});

app.get('/matches/:id', async (req, res) => {

    let response = await request.get({
        url: `https://api.pubg.com/shards/steam/matches/${req.params.id}`,
        headers: {
            'Authorization': apikey,
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
            'Authorization': apikey,
            'Accept': 'application/json',
        },
        gzip: true,
    });

    res.send(JSON.parse(response));
});

const server = app.listen(8080, () => {
    console.log('Server started at port', server.address().port);
});


