export class User {
  constructor(
    //  id ist string weil es sonst ständig fehler gab, wenn die id in der url mitgegeben werden sollte.
    //  -> "number cant be assigned type any | string | ...."
    //  Das war einfach mega nervig und hat unendlich viel Zeit verschwendet
    public id: string,
    public firstname: string,
    public lastname: string,
    public studies: string,
    public helper: boolean,
    public email: string,
  ) {
  }
}
