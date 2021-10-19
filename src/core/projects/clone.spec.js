require('dotenv').config()
const clone = require("./clone");

describe('clone', () => {
    it('should be defined', () => {
        expect(clone).toBeDefined();
        expect(typeof clone).toEqual('function');
    });
})