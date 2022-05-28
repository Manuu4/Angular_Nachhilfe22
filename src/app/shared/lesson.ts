import {Course} from "./course";
import {User} from "./user";

export {Course} from "./course";
export {User} from "./user";

export class Lesson {
  constructor(

    // public id: string,
    // public title: string,
    // public description: string,
    // public taker: string,
    // public status: string,

    //new
    // public user: User,

    //old
    // public user_id: string,
    //
    // public course: Course,
    // public course_id: string,
    // public timeslot1: Date,
    // public timeslot2?: Date,
    // public truetimeslot?: Date

  public id: string,
  public title: string,
  public description: string,
  public taker: string,
  public status: string,
  public user: User,
  public course: Course,
  public course_id: string,
  public timeslot1: Date,
  public timeslot2?: Date,
  public truetimeslot?: Date
  ) {

  }
}
