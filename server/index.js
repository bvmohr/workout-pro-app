const http = require('http');
const app = require('./app');

// In the future, consider https support...
const server = http.createServer(app);
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});