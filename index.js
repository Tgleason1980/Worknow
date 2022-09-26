const server = require('./api/server')
require("dotenv").config(); // load .env variables
const port = process.env.PORT || 9000

server.listen(port, () => console.log(`Listening on port ${port}`))