import {Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {Lesson} from "../shared/lesson";
import {ActivatedRoute, Router} from "@angular/router";
import {NachhilfeService} from "../shared/nachhilfe.service";


@Component({
  selector: 'bs-lesson-details',
  templateUrl: './lesson-details.component.html',
  styles: [
  ]
})
export class LessonDetailsComponent implements OnInit {

  @Input() lesson: Lesson | undefined;
  @Output() showListEvent = new EventEmitter<any>();

  constructor(
    private bs: NachhilfeService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.lesson = this.bs.getSingle(params['id']);
  }

  // Beispiel aus IVL für Bücher; Keine Verwendung hier:
  //    getRating(num: number){
  //      return new Array(num);
  //    }

  showLessonList(){
    this.showListEvent.emit();
  }

}

