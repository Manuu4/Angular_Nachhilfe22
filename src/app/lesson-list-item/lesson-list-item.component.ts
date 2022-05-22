import {Component, Input, OnInit} from '@angular/core';
import { Lesson } from "../shared/lesson";

@Component({
  selector: 'a.bs-lesson-list-item',
  templateUrl: './lesson-list-item.component.html',
  styles: [
  ]
})
export class LessonListItemComponent implements OnInit {

  @Input() lesson: Lesson | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
