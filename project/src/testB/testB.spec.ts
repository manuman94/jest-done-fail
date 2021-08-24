import { promiseTimeout } from '../../helpers/WaitHelper';

jest.setTimeout(60000);

describe('Test B - Basic test suite', () => {
    it('should work', (done) => {
        expect(true).toBe(true);
        promiseTimeout(10000).then(() => {
            done();
        });
    })
});