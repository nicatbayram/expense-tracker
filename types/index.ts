export interface Expense {
    id: string;
    amount: number;
    description: string;
    category: string;
    date: string;
    userId?: string;
  }
  
  export interface Category {
    id: string;
    name: string;
    icon: string;
    color: string;
  }
  
  export interface Budget {
    categoryId: string;
    amount: number;
    spent: number;
  }
  
  export interface Theme {
    background: string;
    cardBackground: string;
    text: string;
    textSecondary: string;
    accent: string;
    error: string;
  }
  
  export interface User {
    id: string;
    email: string;
    displayName?: string;
  }