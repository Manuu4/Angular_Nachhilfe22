import {Course, Lesson, User} from "./lesson";

export class LessonFactory {
  static empty(): Lesson {
    return new Lesson("99", "Beste Einheite ever", "Fu** yeah! This lesson kicks a**!", "", "vergeben", new User("7",'Vanny', 'Maith', 'KWM', true, 'vanny@gmail.com'), new Course("5",'FachrichtungABC', 'Alles dzu dem Themaecececece', "3"), "2", new Date('2022,6,28'));
    // return new Lesson("99", "Beste Einheite ever", "Fu** yeah! This lesson kicks a**!", "", "vergeben", new User("7", 'Vanny', 'Maith', 'KWM', true, 'vanny@gmail.com'), "2", new Date('2022,6,28'));
  }

  static fromObject(rawLesson: any): Lesson {
    return new Lesson(
      rawLesson.id,
      rawLesson.title,
      rawLesson.description,
      rawLesson.taker,
      rawLesson.status,
      rawLesson.user,
      rawLesson.course,
      rawLesson.course_id,
      rawLesson.timeslot1,
      rawLesson.timeslot2,
      rawLesson.truetimeslot
    );

  }
}

