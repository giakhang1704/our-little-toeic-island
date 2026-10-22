import { RewardTransaction } from '../types';

export const REWARD_AMOUNTS = {
  PRACTICE_COMPLETION: 10,
  REVIEW_COMPLETION: 10,
  MISSION_COMPLETION: 5,
  MISSION_ALL_BONUS: 5,
  CAT_MAIL_ROUND: 8,
};

/**
 * Calculates current balance from transactions ledger.
 */
export function calculateBalance(transactions: RewardTransaction[]): number {
  return transactions.reduce((acc, tx) => {
    if (tx.type === 'earned') {
      return acc + tx.amount;
    } else {
      return acc - tx.amount;
    }
  }, 0);
}

/**
 * Validates if spending is allowed without going below 0.
 */
export function canAfford(currentBalance: number, cost: number): boolean {
  return currentBalance >= cost;
}

/**
 * Create an earned reward transaction with an idempotent reference ID.
 */
export function createEarnedTransaction(
  amount: number,
  referenceId: string,
  description: string
): RewardTransaction {
  return {
    id: `tx-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    timestamp: Date.now(),
    amount,
    type: 'earned',
    referenceId,
    description,
  };
}

/**
 * Create a spent reward transaction.
 */
export function createSpentTransaction(
  amount: number,
  referenceId: string,
  description: string
): RewardTransaction {
  return {
    id: `tx-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    timestamp: Date.now(),
    amount,
    type: 'spent',
    referenceId,
    description,
  };
}
