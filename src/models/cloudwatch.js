const { CloudWatchEvents } = require('../sources/aws')

function putEvent(item) {
    const isArray = Array.isArray(item);
    const events = isArray ? item : [item];
    return new Promise((resolve, reject) => {
        CloudWatchEvents.putEvents(events, function(error, data) {
            if (error) {
                reject(error)
            }
            resolve(data)
        });
    });
}

module.exports = {
    putEvent
}