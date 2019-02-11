"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
describe('Calculating Bank Interest', function () {
    test('Throw error when negative balance', function () {
        expect(function () { return index_1.calculateYearlyInterest({ balance: -100 }); }).toThrowError("Balance is negative");
    });
    test('Throw error when negative balance', function () {
        expect(function () { return index_1.calculateYearlyInterest({ balance: 0 }); }).toThrowError("Balance is negative");
    });
    test('Throw error when balance is not a number', function () {
        // @ts-ignore
        expect(function () { return index_1.calculateYearlyInterest({ balance: "-100" }); }).toThrowError("Account balance is not a number");
    });
    test('Calculating interest with balance of below 100', function () {
        expect(index_1.calculateYearlyInterest({ balance: 50 })).toEqual(1.5);
    });
    test('Calculating interest with balance of over 100', function () {
        expect(index_1.calculateYearlyInterest({ balance: 200 })).toEqual(10.0);
    });
    test('Calculating interest with balance of over 1000', function () {
        expect(index_1.calculateYearlyInterest({ balance: 1000 })).toEqual(70.0);
    });
    test('Calculating interest with balance of over 900', function () {
        expect(index_1.calculateYearlyInterest({ balance: 900 })).toEqual(45);
    });
    test('Calculating interest with balance of over 90', function () {
        expect(index_1.calculateYearlyInterest({ balance: 90 })).toEqual(2.7);
    });
});
