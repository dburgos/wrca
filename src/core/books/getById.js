const getBookById = require('../../services/books/getById');

module.exports = function(bookId, byUserId) {
    return getBookById(bookId, byUserId);
}