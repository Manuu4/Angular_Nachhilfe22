import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LessonDetailsComponent} from "./lesson-details/lesson-details.component";
import {LessonListComponent} from "./lesson-list/lesson-list.component";
import {HomeComponent} from "./home/home.component";



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'lessons', component: LessonListComponent},
  {path: 'lessons/:id', component: LessonDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {  }
