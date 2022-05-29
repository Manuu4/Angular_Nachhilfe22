import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { LessonListItemComponent } from './lesson-list-item/lesson-list-item.component';
import { LessonDetailsComponent } from './lesson-details/lesson-details.component';
import { NachhilfeService } from './shared/nachhilfe.service';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { SearchComponent } from './search/search.component';
import { LessonFormComponent } from './lesson-form/lesson-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {AuthenticationService} from "./shared/authentication.service";
import {TokenInterceptorService} from "./shared/token-interceptor.service";
import {ToastrModule} from "ngx-toastr";
import {JwtInterceptorService} from "./shared/jwt-interceptor.service";
import { PersonalListComponent } from './personal-list/personal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonListComponent,
    LessonListItemComponent,
    LessonDetailsComponent,
    HomeComponent,
    SearchComponent,
    LessonFormComponent,
    LoginComponent,
    PersonalListComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, ToastrModule.forRoot()
  ],
  providers: [NachhilfeService, AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
