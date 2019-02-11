import {calculateYearlyInterest} from '../index'

describe('Calculating Bank Interest', () => {
    test('Throw error when negative balance', () => {
        expect(() => calculateYearlyInterest({balance: -100})).toThrowError("Balance is negative");
    });
    test('Throw error when negative balance', () => {
        expect(() => calculateYearlyInterest({balance: 0})).toThrowError("Balance is negative");
    });
    test('Throw error when balance is not a number', () => {
        // @ts-ignore
        expect(() => calculateYearlyInterest({balance: "-100"})).toThrowError("Account balance is not a number");
    });
    test('Calculating interest with balance of below 100', () => {
        expect(calculateYearlyInterest({balance: 50})).toEqual(1.5);
    });
    test('Calculating interest with balance of over 100', () => {
        expect(calculateYearlyInterest({balance: 200})).toEqual(10.0);
    });
    test('Calculating interest with balance of over 1000', () => {
        expect(calculateYearlyInterest({balance: 1000})).toEqual(70.0);
    });
    test('Calculating interest with balance of over 900', () => {
        expect(calculateYearlyInterest({balance: 900})).toEqual(45);
    });
    test('Calculating interest with balance of over 90', () => {
        expect(calculateYearlyInterest({balance: 90})).toEqual(2.7);
    });
})
