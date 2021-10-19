const requireJwt = require('../middleware/jwt');
const getBookById = require('../../../core/books/getById');

module.exports = function(api) {
    api.get('/books/:bookId', requireJwt, async function (req, res) {
        try {
            const { bookId } = req.params;
            const { userId } = req.user;
            const output = await getBookById(bookId, userId);
            return res.status(200).send(output)
        } catch(e) {
            if (e.code === 'ID_REQUIRED') {
                return res.status(401).send({ message: 'Please provide ID parameter'})
            }
            if (e.code === 'NOT_FOUND') {
                return res.status(404).send({ message: 'This book is not found'})
            }
            return res.status(500).send(true)
        }
    });
}