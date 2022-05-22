import { Component, OnInit } from '@angular/core';
import {Lesson, User, Course} from "../shared/lesson";

@Component({
  selector: 'bs-lesson-list',
  templateUrl: './lesson-list.component.html',
  styles: [
  ]
})
export class LessonListComponent implements OnInit {

  lessons : Lesson[] = [];

  constructor() { }

  ngOnInit(): void {
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

    console.log(this.lessons);


  }

}
