export interface Transaction {
  id: number,
  source: string,
  target: string,
  amount: number,
  description: string
}

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
 let transactions: Transaction[] = [
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

let dupTransactions: Transaction[];

export function findDuplicateTransactions(transactions: Transaction[]): Transaction[] {
  let props = ['source', 'target', 'amount', 'description'];
  let dupTransactions = transactions.reduce((acc, current) => {
    if(!acc.some(item => props.every(eitem => item[eitem] !== current[eitem] ) )) {
      acc.push(current);
    }
    return acc;
  }, []);
  return dupTransactions;
}

console.log(findDuplicateTransactions(transactions));