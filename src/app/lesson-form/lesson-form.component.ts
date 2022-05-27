import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import {LessonFactory} from "../shared/lesson-factory";
import {ActivatedRoute, Router} from "@angular/router";
import {NachhilfeService} from "../shared/nachhilfe.service";
import {LessonFormMessages} from "./lesson-form-messages";
import { Course } from '../shared/course';
import {Lesson} from "../shared/lesson";
import {empty, isEmpty} from "rxjs";

@Component({
  selector: 'bs-lesson-form',
  templateUrl: './lesson-form.component.html',
  styles: [
  ]
})
export class LessonFormComponent implements OnInit {

  lessonForm : FormGroup;
  lesson = LessonFactory.empty();
  errors: { [key: string]: string} = {};
  isUpdatingLesson = false;

  courses: Course[] = [];


  constructor(
    private fb: FormBuilder,
    private bs: NachhilfeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.lessonForm = this.fb.group({});
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    if(id){
      this.isUpdatingLesson = true;
      this.bs.getSingle(id).subscribe(lesson => {
        this.lesson = lesson;
        this.initLesson();
      });
    }

    this.initLesson();
    this.initCourses();
  }

  initLesson() {
    this.lessonForm = this.fb.group({
      id: this.lesson.id,
      title: [this.lesson.title, Validators.required],
      description: this.lesson.description,
      timeslot1: [
        this.lesson.timeslot1, Validators.required],
      timeslot2: this.lesson.timeslot2,
      course: [this.lesson.course, Validators.required],
      course_id: [this.lesson.course_id]
    });

    this.lessonForm.statusChanges.subscribe(() =>
      this.updateErrorMessages())
  }

  initCourses() {
    this.bs.getAllCourses().subscribe((res) => this.courses = res);
  }

  updateErrorMessages() {
    console.log("Is valid?" + this.lessonForm.invalid);
    this.errors = {};

    for (const message of LessonFormMessages) {
      const control = this.lessonForm.get(message.forControl);
      if (
        control &&
        control.dirty &&
        control.invalid &&
        control.errors &&
        !this.errors[message.forControl]
      ) {
        this.errors[message.forControl] = message.text;
      }
    }
    console.log(this.errors);
  }

  submitForm() {
    const lesson: Lesson = LessonFactory.fromObject(this.lessonForm.value);
    // lesson.course = this.lesson.course;

    if(this.isUpdatingLesson){
      this.bs.update(lesson).subscribe(res => {
        this.router.navigate(['../../lessons', lesson.id], {
          relativeTo: this.route
        });
      });
    }
  }

}
