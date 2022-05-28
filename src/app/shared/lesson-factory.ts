import {Course, Lesson, User} from "./lesson";

export class LessonFactory {
  static empty(): Lesson {
    return new Lesson(
      // "99",
      // "Beste Einheite ever",
      // "Fu** yeah! This lesson kicks a**!",
      // "",
      // "vergeben",
      // new User("7",'Vanny', 'Maith', 'KWM', true, 'vanny@gmail.com'),
      // new Course("5",'FachrichtungABC',
      //   'Alles dzu dem Themaecececece', "3"),
      // "2", new Date('2022,6,28'));

      '',
      '',
      '',
      '',
      'verfügbar',
      0,
      new Course('','',
        '', ''),
      '',
      new Date(),
      new Date()
    )



  }

  static fromObject(rawLesson: any): Lesson {
    return new Lesson(
      rawLesson.id,
      rawLesson.title,
      rawLesson.description,
      rawLesson.taker,
      rawLesson.status,
      rawLesson.user_id,
      rawLesson.course,
      rawLesson.course_id,
      typeof(rawLesson.timeslot1) === 'string' ?
        new Date(rawLesson.timeslot1) : rawLesson.timeslot1,
      typeof(rawLesson.timeslot2) === 'string' ?
        new Date(rawLesson.timeslot2) : rawLesson.timeslot2,
      rawLesson.truetimeslot
    );

  }
}

