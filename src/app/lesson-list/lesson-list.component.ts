import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Lesson, User, Course} from "../shared/lesson";
import {NachhilfeService} from "../shared/nachhilfe.service";

@Component({
  selector: 'bs-lesson-list',
  templateUrl: './lesson-list.component.html',
  styles: []
})
export class LessonListComponent implements OnInit {

  lessons : Lesson[] = [];

  @Output() showDetailsEvent = new EventEmitter<Lesson>();

  constructor(private bs: NachhilfeService) { }

  ngOnInit(): void {
    // this.bs.getAll().subscribe(res => this.lessons = res);
    // console.log(this.lessons);
    this.bs.findByStatus('verfügbar').subscribe(res => this.lessons = res);
  }

  showDetails(lesson : Lesson){
    // console.log(lesson);
    this.showDetailsEvent.emit(lesson);
  }


}
