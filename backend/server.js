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

const server = app.listen(8080, () => {
    console.log('Server started at port', server.address().port);
});


