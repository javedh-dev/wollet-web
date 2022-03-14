import { Account } from "./Account";
import { Category } from "./Category";

export type Transaction = {
	id: number;
	account: Account;
	category: Category;
	amount: number;
	note: string;
	createdAt: string;
};
