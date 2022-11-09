const express = require('express');
const webstomp = require('webstomp-client');
const WebSocket =  require(' ws');

const app = express();
const port = 3002;
const client = webstomp.over(new WebSocket('ws://127.0.0.1:15674/ws'));

function onError(user, err){
    console.log('Desconenctado', user, name, error);

}

let message = "Hola Mundo!!!";
function onConnect(user){
    console.log('Conectado', user, name);
    client.send('');
}

app.listen(port, () => console.log(`App listening on port ${port}`));
