import { promiseTimeout } from '../../helpers/WaitHelper';

jest.setTimeout(60000);

describe('Test A - Basic test suite', () => {
    it('should work', (done) => {
        expect(true).toBe(true);
        done.fail('Error');

        // promiseTimeout().then(() => {
        // });
    })
});