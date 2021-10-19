const AWS = require('aws-sdk');
const CONFIG = require('../config/aws.json');

if (!AWS.config.region && process.env.AWS_REGION) {
    AWS.config.update({
        region: process.env.AWS_REGION
    });
}

const services = {
    CloudWatchEvents: new AWS.CloudWatchEvents({ apiVersion: CONFIG.CloudWatch.version }),
    SES: new AWS.SES({ apiVersion: CONFIG.SES.version }),
    SQS: new AWS.SQS({ apiVersion: CONFIG.SQS.version })
};

module.exports = services;