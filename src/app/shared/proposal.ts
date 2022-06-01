import { Lesson } from "./lesson";
export { Lesson } from "./lesson";
import {User} from "./user";
export {User} from "./user";

export class Proposal {
  constructor(

    public id: string,
    public time: Date,
    public status: string,
    public user: User,
    public user_id: number,
    public lesson: Lesson,
    public lesson_id: string,
    public message?: string
  ) {
  }
}

