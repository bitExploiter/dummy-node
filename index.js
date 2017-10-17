const express = require('express');
const app = express();

var createHandler = require('github-webhook-handler');
var handler = createHandler({path: '/webhook', secret: 'myhashsecret'});

handler.on('*', function (event) {
    const cmd = require('node-cmd');

    cmd.get('git pull https://github.com/bitExploiter/dummy-node', function (err, data, stderr) {
            console.log(data);
        });

});

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.use(handler);

app.listen(process.env.PORT, function () {
    console.log('Example app listening on port ' + process.env.PORT);
});
