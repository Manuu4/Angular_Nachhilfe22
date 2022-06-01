import {Component, EventEmitter, Output} from '@angular/core';
import {Lesson} from "./shared/lesson";
import {AuthenticationService} from "./shared/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  lesson : Lesson | undefined;

  listOn = true;
  detailsOn = false;

  @Output() showDetailsEvent = new EventEmitter<Lesson>();

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  // showList(){
  //   this.listOn = true;
  //   this.detailsOn = false;
  // }
  //
  // showDetails(lesson:Lesson){
  //   this.lesson = lesson;
  //   this.listOn = false;
  //   this.detailsOn = true;
  // }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  userIsHelper() {
    return this.authService.userIsHelper();
  }

  getLoginLabel(){
    return this.isLoggedIn() ? "Logout" : "Login";
  }

  // für Suchfeld benötigt
  lessonSelected(lesson: Lesson){
    this.router.navigate(['../lessons', lesson.id], {relativeTo: this.route});
  }

  showDetails(lesson : Lesson){
    this.showDetailsEvent.emit(lesson);
  }

  title = 'nachhilfe22';
}

//ss

