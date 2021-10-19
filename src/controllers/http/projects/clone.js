const requireJwt = require('../middleware/jwt');
const clone = require('../../../core/projects/clone');

module.exports = function(api) {
    api.post('/projects/:projectId/clone', requireJwt, async function (req, res) {
        try {
            const { projectId } = req.params;
            const { code } = req.body;
            const options = {
                copySites: req.body.sites,
                copyBanners: req.body.banners,
                copyFeatured: req.body.featured
            };
            const output = await clone(projectId, code, options);
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