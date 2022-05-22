import {Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {Lesson} from "../shared/lesson";

@Component({
  selector: 'bs-lesson-details',
  templateUrl: './lesson-details.component.html',
  styles: [
  ]
})
export class LessonDetailsComponent implements OnInit {

  @Input() lesson: Lesson | undefined;
  @Output() showListEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  // Beispiel aus IVL für Bücher; Keine Verwendung hier:
  //    getRating(num: number){
  //      return new Array(num);
  //    }

  showLessonList(){
    this.showListEvent.emit();
  }

}

