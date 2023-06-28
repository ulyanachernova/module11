import { getPercents } from './index.js';

describe('tests get percents', () => {
    it ('Successful: 30% from 200 is 60', () => {
        expect(getPercents(30,200)).toBe(60);
    }),
    it ('Unsuccessful: p% from 1 is 1', () => {
        expect(getPercents(p,1)).toBe(1);
    });
    it ('Corner case: 5% from 20 is 1.25', () => {
        expect(getPercents(5,20)).toBe(1.25);
    });
});