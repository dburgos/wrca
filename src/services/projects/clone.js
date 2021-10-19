const prisma = require('../../models/prisma');
const cloneProject = require('./cloneProject');
const cloneSites = require('./cloneSites');
const cloneBanners = require('./cloneBanners');
const cloneFeatured = require('./cloneFeatured');

module.exports = async function(projectId, code, options) {
    const {
        copySites = true,
        copyBanners = true,
        copyFeatured = true
    } = options;
    const transactionSteps = [
        cloneProject(projectId, code)
    ];
    if (copySites) {
        transactionSteps.push(cloneSites(code));
    }
    if (copyBanners) {
        transactionSteps.push(cloneBanners(code));
    }
    if (copyFeatured) {
        transactionSteps.push(cloneFeatured(code));
    }
    return prisma.$transaction(transactionSteps);
}