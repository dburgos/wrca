const cloudwatch = require('../../models/cloudwatch')

module.exports = function(code, byUserId, options) {
    const data = {
        ...options,
        code,
        byUserId
    };
    return cloudwatch.putEvent(data);
}