import { Course } from "./course";
import {User} from "./user";
export { Course } from "./course";
export {User} from "./user";

export class Lesson {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public taker: number,
    public status: string,
    public user: User,
    public course: Course,
    public timeslot1: Date,
    public timeslot2?: Date,
    public truetimeslot?: Date

  ) {

  }
}
