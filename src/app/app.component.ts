import { Component } from '@angular/core';
import {Lesson} from "./shared/lesson";

@Component({
  selector: 'bs-root',
  template: `<bs-lesson-list (showDetailsEvent)="showDetails($event)" *ngIf="listOn"></bs-lesson-list>
  <bs-lesson-details (showListEvent)="showList()" *ngIf="detailsOn" [lesson]="lesson"></bs-lesson-details>`,
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
