require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const router = require('./router');
require('./models/prisma');
const { connect: initRedis } = require('./sources/redis');
const { PORT = 3000 } = process.env;
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
initRedis();
router(server);

server.listen(PORT, () => {
    console.log(`express running on port ${PORT} ✅`)
});