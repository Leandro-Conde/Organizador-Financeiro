import { mockTransactions } from "../data/mockData";

export const transactionService = {
  async getAll() {
    return mockTransactions;
  },

  async create(transaction) {
    return transaction;
  },

  async delete(id) {
    return true;
  },
};

import { mockTransactions } from "../data/mockData";

export const transactionService = {
  async getAll() {
    return mockTransactions;
  },

  async create(transaction) {
    return transaction;
  },

  async delete(id) {
    return true;
  },
};