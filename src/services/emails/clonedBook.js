const format = require("string-template");
const CONFIG = require('../../config/emails.json');
const emailer = require('../../models/emailer');
const getUserById = require('../../services/users/getById');

module.exports = async function(code, byUserId) {
    const user = await getUserById(byUserId);
    const hasEmail = user && user.email;
    if (!hasEmail) {
        return false;
    }
    const { from, subject, body } = CONFIG.clonedProject;
    const message = format(body, { code });
    return emailer.send(from, user.email, subject, message)
}