const express = require('express');
const webstomp = require('webstomp-client');
const WebSocket =  require(' ws');

const app = express();
const port = 3002;
const client = webstomp.over(new WebSocket('http://127.0.0.1:15674/ws'));

function onError(user, err){
    console.log('Desconectado', user, name, error);

}

let message = "Hola Mundo!!!";
function onConnect(user){
    console.log('Conectado', user, name);
    client.send('/exchange/web-service-endpoint', message, {'content-type': 'text/plain'});
}

client.connect('guest','guest', onConnect, onError);

app.listen(port, () => console.log(`App listening on port ${port}`));
