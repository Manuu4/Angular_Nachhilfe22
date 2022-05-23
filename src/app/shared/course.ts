export class Course {
  constructor(
    //  id ist string weil es sonst ständig fehler gab, wenn die id in der url mitgegeben werden sollte.
    //  -> "number cant be assigned type any | string | ...."
    //  Das war einfach mega nervig und hat unendlich viel Zeit verschwendet
    public id: string,
    public name: string,
    public description: string,
    public semester: string
  ) {
  }
}
