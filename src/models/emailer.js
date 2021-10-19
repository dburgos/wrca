const { SES } = require('../sources/aws')

function send(fromEmail, toEmail, subject, body) {
    const toEmails = Array.isArray(toEmail) ? toEmail : [toEmail];
    const params = {
        Destination: {
            ToAddresses: toEmails
        }, 
        Message: {
            Body: {
                Text: {
                    Charset: "UTF-8", 
                    Data: body
                }
            }, 
            Subject: {
                Charset: "UTF-8", 
                Data: subject
            }
        }, 
        ReplyToAddresses: [
            fromEmail
        ],
        Source: fromEmail
    };
    return new Promise((resolve, reject) => {
        SES.sendEmail(params, function(error, data) {
            if (error) {
                reject(error)
            }
            resolve(data)
        });
    });
}

module.exports = {
    send
}