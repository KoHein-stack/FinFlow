import { create } from 'zustand';

export const useFinanceStore = create((set) => ({
  transactions: [
    { id: 1, title: 'Netflix', amount: -15, category: 'Subs' },
    { id: 2, title: 'Salary', amount: 3000, category: 'Income' },
  ],
  addTransaction: (newTx) => set((state) => ({ 
    transactions: [newTx, ...state.transactions] 
  })),
}));