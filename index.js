const express = require('express');
const app = express();

let port = process.env.port;
if (port === null || port === "" || port === undefined) port = 3000;

app.use(express.static('public'));





app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.listen(port, () => console.log(`Chatwall listening on port ${port}`));
