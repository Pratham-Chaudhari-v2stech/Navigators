export type RootStackParamList={
    Home:undefined,
    AddExpense:undefined,
    ExpenseHistory:undefined,
}

export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
}