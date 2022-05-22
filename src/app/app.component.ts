import { Component } from '@angular/core';
import {Lesson} from "./shared/lesson";

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  lesson : Lesson | undefined;

  listOn = true;
  detailsOn = false;

  showList(){
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(lesson:Lesson){
    this.lesson = lesson;
    this.listOn = false;
    this.detailsOn = true;
  }



  title = 'nachhilfe22';
}
