import {Component} from '@angular/core';
import {Lesson} from "./shared/lesson";
import {AuthenticationService} from "./shared/authentication.service";

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  lesson : Lesson | undefined;

  listOn = true;
  detailsOn = false;

  constructor(private authService: AuthenticationService) {
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

  getLoginLabel(){
    return this.isLoggedIn() ? "Logout" : "Login";
  }

  title = 'nachhilfe22';
}


