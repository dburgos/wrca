module.exports = function(api) {
    api.get('/', function (req, res) {
        return res.status(200).send(true)
    });
}