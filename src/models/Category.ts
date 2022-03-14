export enum CategoryType {
	INCOME = "INCOME",
	EXPENSE = "EXPENSE",
}

export type Category = {
	id: number;
	name: string;
	type: CategoryType;
	budget: number;
};
