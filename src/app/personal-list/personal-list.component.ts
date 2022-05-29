import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../shared/authentication.service";
import {NachhilfeService} from "../shared/nachhilfe.service";
import {Lesson} from "../shared/lesson";
import { NgModule } from '@angular/core';

@Component({
  selector: 'bs-personal-list',
  templateUrl: './personal-list.component.html',
  styles: [
  ]
})
export class PersonalListComponent implements OnInit {

  lessons: Lesson[] = [];

  @Output() showDetailsEvent = new EventEmitter<Lesson>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private bs: NachhilfeService,
  ) { }

  ngOnInit(): void {
    let studentId = this.authService.getCurrentUserId().toString();
    // let userRole = this.authService.getCurrentUserRole();
    console.log(studentId);
    // console.log(userRole);
    this.bs.findLessonsByTakerId(studentId).subscribe(res => this.lessons = res);
    // this.bs.findLessonsByHelperId(studentId).subscribe(res => this.lessons = res);
    // ---> geht alles mit einer Abfrage, da Nutzer entweder nur Ersteller oder Nehmer sein kann.

  }




  showDetails(lesson : Lesson){
    // console.log(lesson);
    this.showDetailsEvent.emit(lesson);
  }


  // get helpersLessons(){
  //   let helperId = this.authService.getCurrentUserId();
  //   return this.bs.findLessonsByHelperId(helperId.toString()).subscribe(res => this.lessons = res);
  // }

  // get takersLessons(){
  //   let studentId = this.authService.getCurrentUserId();
  //   this.bs.findLessonsByTakerId(studentId.toString()).subscribe(res => this.lessons = res);
  //   return this.lessons;
  // }

}
