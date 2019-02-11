"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateYearlyInterest(account) {
    if (!account) {
        throw Error("No account specified");
        return 0;
    }
    if (typeof (account.balance) !== "number") {
        throw Error("Account balance is not a number");
        return 0;
    }
    if (account.balance <= 0) {
        throw Error("Balance is negative");
        return 0;
    }
    var balance = account.balance;
    if (balance >= 1000) {
        return calcPercent(balance, 7);
    }
    else if (balance >= 100 && balance < 1000) {
        return calcPercent(balance, 5);
    }
    else {
        return calcPercent(balance, 3);
    }
}
exports.calculateYearlyInterest = calculateYearlyInterest;
function calcPercent(balance, percent) {
    return parseFloat(((balance / 100) * percent).toFixed(1));
}
exports.calcPercent = calcPercent;
