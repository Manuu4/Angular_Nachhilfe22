import {Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {Lesson} from "../shared/lesson";
import {ActivatedRoute, Router} from "@angular/router";
import {NachhilfeService} from "../shared/nachhilfe.service";
import {Subject} from "rxjs";
import {LessonFactory} from "../shared/lesson-factory";


@Component({
  selector: 'bs-lesson-details',
  templateUrl: './lesson-details.component.html',
  styles: [
  ]
})
export class LessonDetailsComponent implements OnInit {

  // @Input() lesson: Lesson | undefined;
  // @Output() showListEvent = new EventEmitter<any>();

  lesson : Lesson = LessonFactory.empty();

  constructor(
    private bs: NachhilfeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.bs.getSingle(params['id']).subscribe(l => this.lesson = l);
    //console.log("Wenn dich meine Antworten erschrecken, dann solltest du aufhören, erschreckende Fragen zu stellen.");
  }

  // Beispiel aus IVL für Bücher; Keine Verwendung hier:
  //    getRating(num: number){
  //      return new Array(num);
  //    }

  removeLesson(){
    if (confirm("Einheit wirklich entfernen?")){
      this.bs.remove(this.lesson.id)
        .subscribe(res => this.router.navigate(['../'], {relativeTo: this.route}));

    }
  }

}

