export enum CategoryType {
  INCOME = "INCOME",
  EXPENSE = "EXPENSE",
}

export type Category = {
  id: number;
  name: string;
  categoryType: CategoryType;
  budget: number;
};
