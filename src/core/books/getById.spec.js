require('dotenv').config()
const getById = require("./getById");

describe('getById', () => {
    it('should be defined', () => {
        expect(getById).toBeDefined();
        expect(typeof getById).toEqual('function');
    });

    it('should return the object', async () => {
        let error;
        let output;
        try {
            output = await getById('059955e6-c369-4979-8967-9a7204061300', '1')
        } catch (e) {
            error = e;
        } finally {
            expect(error).toBeUndefined();
            expect(output).toBeDefined();
            expect(typeof output).toEqual('object');
        }
    });
})