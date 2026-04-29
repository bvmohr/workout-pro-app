const http = require('http');
const app = require('server');
const server = http.createServer(app);
const PORT = 3000;

server.listen(3000, () => {
    console.log(`Server listening on port ${PORT}`);
});