import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Lesson} from "../shared/lesson";
import {ActivatedRoute, Router} from "@angular/router";
import {NachhilfeService} from "../shared/nachhilfe.service";
import {Subject} from "rxjs";
import {LessonFactory} from "../shared/lesson-factory";
import {AuthenticationService} from "../shared/authentication.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProposalFactory} from "../shared/proposal-factory";
import {LessonFormMessages} from "../lesson-form/lesson-form-messages";
import {Proposal} from "../shared/proposal";


@Component({
  selector: 'bs-lesson-details',
  templateUrl: './lesson-details.component.html',
  styles: []
})
export class LessonDetailsComponent implements OnInit {

  proposal = ProposalFactory.empty();
  errors: { [key: string]: string } = {};
  lesson: Lesson = LessonFactory.empty();

  constructor(
    private bs: NachhilfeService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthenticationService
  ) {

  }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.bs.getSingle(params['id']).subscribe(l => this.lesson = l);
    //console.log("Wenn dich meine Antworten erschrecken, dann solltest du aufhören, erschreckende Fragen zu stellen.");

  }

  bookThisTime(timeslot: any, lesson_id: any) {
    this.proposal.time = timeslot;
    this.proposal.lesson_id = lesson_id;
    this.proposal.user_id = this.authService.getCurrentUserId();
    this.bs.saveProposal(this.proposal).subscribe();
  }

  submitF() {

    const inputMessage = document.getElementById('description') as HTMLInputElement | null;
    const valueMessage = inputMessage?.value;

    const inputTermin = document.getElementById('alternativtermin') as HTMLInputElement | null;
    // const valueTermin = inputTermin?.value | Date;
    // console.log(valueTermin);


    this.proposal.message = valueMessage;
    this.proposal.user_id = this.authService.getCurrentUserId();
    this.proposal.lesson_id = this.lesson.id;
    this.proposal.time = new Date();
    this.bs.saveProposal(this.proposal).subscribe();

    console.log(this.proposal);

  }


  removeLesson() {
    if (confirm("Einheit wirklich entfernen?")) {
      this.bs.remove(this.lesson.id)
        .subscribe(res => this.router.navigate(['../'], {relativeTo: this.route}));

    }
  }

  userIsHelper() {
    return this.authService.userIsHelper();
  }

  userIsCreator() {
    return this.lesson.user_id == this.authService.getCurrentUserId();
  }

}

