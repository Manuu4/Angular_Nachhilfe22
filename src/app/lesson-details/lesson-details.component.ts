import {Component, Input, OnInit} from '@angular/core';
import {Lesson} from "../shared/lesson";

@Component({
  selector: 'bs-lesson-details',
  templateUrl: './lesson-details.component.html',
  styles: [
  ]
})
export class LessonDetailsComponent implements OnInit {

  @Input() lesson: Lesson | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  // getRating(num: number){
  //   return new Array(num);
  // }

}
