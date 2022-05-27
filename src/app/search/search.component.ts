import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {debounceTime, distinctUntilChanged, filter, switchMap, tap} from "rxjs";
import {Lesson} from "../shared/lesson";
import {NachhilfeService} from "../shared/nachhilfe.service";


@Component({
  selector: 'bs-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  keyup = new EventEmitter<string>();
  foundLessons: Lesson[] = [];
  isLoading = false;
  @Output() lessonSelected = new EventEmitter<Lesson>();

  constructor(private bs: NachhilfeService) { }

  ngOnInit(): void {
    this.keyup.pipe(filter(term => term != ""))
      .pipe(debounceTime(500))
      .pipe(distinctUntilChanged())
      .pipe(tap(() => this.isLoading = true))
      .pipe(switchMap(searchTerm => this.bs.getAllSearch(searchTerm)))
      .pipe(tap(() => this.isLoading = false))
      .subscribe(lessons => this.foundLessons = lessons);
  }

}
