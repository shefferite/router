let express = require('express');
let coreService = require('coreService');

let app = express();

app.use(express.static(__dirname + '/frontend/src/'));

app.get('/translate', function(request, response) {
    const request = request.query;

    coreService.translate();

    response.send(JSON.stringify({
            answer: 'Hello, World!'
        }));
    console.log('lol');
});

// make the app listen on port 3000
app.listen(3000);
