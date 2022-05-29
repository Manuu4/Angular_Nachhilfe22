import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Course, Lesson} from "../shared/lesson";
import {NachhilfeService} from "../shared/nachhilfe.service";

@Component({
  selector: 'bs-course-list',
  templateUrl: './course-list.component.html',
  styles: [
  ]
})
export class CourseListComponent implements OnInit {

  courses : Course[] = [];

  @Output() showDetailsEvent = new EventEmitter<Lesson>();

  constructor(private bs: NachhilfeService) { }

  ngOnInit(): void {
    this.bs.getAllCourses().subscribe(res => this.courses = res);
    // console.log(this.lessons);

  }

  showDetails(lesson : Lesson){
    // console.log(lesson);
    this.showDetailsEvent.emit(lesson);
  }

}
