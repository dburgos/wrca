const cloneProject = require('../../services/projects/clone');
const sendClonedBookEmail = require('../../services/emails/clonedBook');
const trackClonedProject = require('../../services/events/clonedProject');

module.exports = async function(projectId, code, options = {}, byUserId) {
    const clones = await cloneProject(projectId, code, options);
    await sendClonedBookEmail(code, byUserId);
    await trackClonedProject(code, byUserId, options)

    const done = !!clones;
    return done;
}