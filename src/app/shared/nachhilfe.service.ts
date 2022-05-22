import { Injectable } from '@angular/core';
import {Course, Lesson, User} from "./lesson";

@Injectable({
  providedIn: 'root'
})
export class NachhilfeService {

  lessons : Lesson[];

  constructor() {
    this.lessons = [
      new Lesson(
        1,
        'Wir lernen zusammen',
        'Hier lernt man dies',
        3,
        'offen',
        new User(1,'Manu', 'Strobel', 'KWM', true, 'manu@gmail.com'),
        new Course(1,'Komm-Wissenschaften', 'Alles dzu dem Thema', 4),
        new Date('2022,5,28')
      ),
      new Lesson(
        2,
        'Ein wenig üben',
        'Hier lernt man jenes',
        3,
        'offen',
        new User(2,'Marc', 'Strobel', 'KWM', true, 'marc@gmail.com'),
        new Course(1,'Adaptivität', 'Ganz viel Input', 6),
        new Date('2022,6,30'),
        new Date('2022,1,11')
      )];
  }

  getAll(){
    return this.lessons;
  }

  getSingle(id: number) : Lesson {
    return <Lesson>this.lessons.find(lesson => lesson.id == id);
  }

}
