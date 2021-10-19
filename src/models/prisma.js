const { PrismaClient } = require('@prisma/client')
let client;
try {
    client = new PrismaClient();
} catch (e) {
    console.error('Error creating Prisma DB client 🚨')
    console.error(e)
}

module.exports = client;
