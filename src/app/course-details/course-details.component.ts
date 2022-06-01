import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course, Lesson} from "../shared/lesson";
import {NachhilfeService} from "../shared/nachhilfe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'a.bs-course-details',
  templateUrl: './course-details.component.html',
  styles: []
})
export class CourseDetailsComponent implements OnInit {

  lessons : Lesson[] = [];
  @Output() showDetailsEvent = new EventEmitter<Lesson>();

  constructor(
    private bs: NachhilfeService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {

    const params = this.route.snapshot.params;
    this.bs.findLessonsByCourseId(params['id']).subscribe(res => this.lessons = res);
    console.log(this.lessons);
    console.log(params['id']);




  }

  showDetails(lesson : Lesson){
    // console.log(lesson);
    this.showDetailsEvent.emit(lesson);
  }


}
