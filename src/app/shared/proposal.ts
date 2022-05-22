import { Lesson } from "./lesson";
export { Lesson } from "./lesson";
import {User} from "./user";
export {User} from "./user";

export class Proposal {
  constructor(
    public id: number,
    public time: Date,
    public status: string,
    public user: User,
    public lesson: Lesson,
    public message?: string
  ) {
  }
}

