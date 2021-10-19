const prisma = require('../../models/prisma');

module.exports = function(id) {
    const query = {
        uuid: id
    };
    return prisma.users.findUnique({
        where: query
    });
}