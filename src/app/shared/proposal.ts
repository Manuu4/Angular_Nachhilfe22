import { Lesson } from "./lesson";
export { Lesson } from "./lesson";
import {User} from "./user";
export {User} from "./user";

export class Proposal {
  constructor(
    //  id ist string weil es sonst ständig fehler gab, wenn die id in der url mitgegeben werden sollte.
    //  -> "number cant be assigned type any | string | ...."
    //  Das war einfach mega nervig und hat unendlich viel Zeit verschwendet
    public id: string,
    public time: Date,
    public status: string,
    public user: User,
    public lesson: Lesson,
    public message?: string
  ) {
  }
}

