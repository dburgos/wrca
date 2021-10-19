const prisma = require('../../models/prisma');

module.exports = function(id) {
    const query = {
        uuid: id
    };
    return prisma.books.findUnique({
        where: query
    });
}