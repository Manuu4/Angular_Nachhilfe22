import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { LessonListItemComponent } from './lesson-list-item/lesson-list-item.component';
import { LessonDetailsComponent } from './lesson-details/lesson-details.component';
import { NachhilfeService } from './shared/nachhilfe.service';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonListComponent,
    LessonListItemComponent,
    LessonDetailsComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule
  ],
  providers: [NachhilfeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
