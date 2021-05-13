"use strict";
exports.__esModule = true;
exports.findDuplicateTransactions = void 0;
/**
 * Find duplicate transactions
 * Given a list of transactions, find and return duplicate transactions. There can be more than one duplicate transactions.
 * A transaction can be called duplicate if it has the same `source`, `target`, `amount` and `description`.
 *
 * This is how a transaction looks like.
 *
 * {
 *   id: 1,
 *   source: 'A',
 *   target: 'B',
 *   amount: 300,
 *   description: 'tikkie'
 * }
 *
 * Note:
 * - Create additional functions if required.
 * - Follow proper coding conventions and best practices.
 * - Make sure existing unit test passes.
 * - Write further unit tests to cover maximum code.
 *
 *
 * @param transactions List of transactions
 * @returns {Transaction[]} List of duplicate transactions
 */
var ob = [
    {
        id: 1,
        source: 'A',
        target: 'B',
        amount: 300,
        description: 'tikkie'
    },
    {
        id: 2,
        source: 'b',
        target: 'c',
        amount: 100,
        description: 'paypal'
    },
    {
        id: 3,
        source: 'A',
        target: 'B',
        amount: 300,
        description: 'tikkie'
    }
];
var dupTransactions;
function findDuplicateTransactions(transactions) {
    // TODO
    // This has been done just to make the test pass for now.
    var props = ['source', 'target', 'amount', 'description'];
    var dupTransactions = transactions.reduce(function (acc, current) {
        if (!acc.some(function (item) { return props.every(function (eitem) { return item[eitem] !== current[eitem]; }); })) {
            acc.push(current);
        }
        return acc;
    }, []);
    return dupTransactions;
}
exports.findDuplicateTransactions = findDuplicateTransactions;
console.log(findDuplicateTransactions(ob));
