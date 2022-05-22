import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { LessonListItemComponent } from './lesson-list-item/lesson-list-item.component';
import { LessonDetailsComponent } from './lesson-details/lesson-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonListComponent,
    LessonListItemComponent,
    LessonDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
