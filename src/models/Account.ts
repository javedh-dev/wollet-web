export enum AccountType {
  SAVING = "SAVING",
  CREDIT_CARD = "CREDIT_CARD",
  CURRENT = "CURRENT",
  INVESTMENT = "INVESTMENT",
  OTHER = "OTHER",
}

export type Account = {
  id: number;
  name: string;
  accountType: AccountType;
  includeInBalance: boolean;
  initialBalance: number;
  initialBalanceDate: Date;
};
