const express = require('express');
const app = express();

var createHandler = require('github-webhook-handler');
var handler = createHandler({ path: '/webhook', secret: 'myhashsecret' });

handler.on('push', function (event) {
    console.log('Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref)
});

app.get('/', function (req, res) {
    res.send('Hello World! Ohh YEajjj')
});

app.use(handler);

app.listen(8084, function () {
    console.log('Example app listening on port ' + 8084);
});
