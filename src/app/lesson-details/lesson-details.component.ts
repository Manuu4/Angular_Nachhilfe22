import {Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
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
  styles: [
  ]
})
export class LessonDetailsComponent implements OnInit {

  proposalForm: FormGroup;
  proposal = ProposalFactory.empty();
  errors: { [key: string]: string } = {};
  lesson : Lesson = LessonFactory.empty();

  constructor(

    private fb: FormBuilder,
    private bs: NachhilfeService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthenticationService
  ) {
    this.proposalForm = this.fb.group({});
  }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.bs.getSingle(params['id']).subscribe(l => this.lesson = l);
    //console.log("Wenn dich meine Antworten erschrecken, dann solltest du aufhören, erschreckende Fragen zu stellen.");
    this.initProposal();

  }

  initProposal() {
    this.proposalForm = this.fb.group({
      id: this.proposal.id,
      time: this.proposal.time,
      message: this.proposal.message,
    });

    this.proposalForm.statusChanges.subscribe(() =>
      this.updateErrorMessages())
  }

  updateErrorMessages() {
    // console.log("Is valid?" + this.lessonForm.invalid);
    this.errors = {};

    for (const message of LessonFormMessages) {
      const control = this.proposalForm.get(message.forControl);
      if (
        control &&
        control.dirty &&
        control.invalid &&
        control.errors &&
        !this.errors[message.forControl]
      ) {
        this.errors[message.forControl] = message.text;
      }
    }
    if(this.errors) console.log(this.errors);
  }


  submitForm() {
    const proposal: Proposal = ProposalFactory.fromObject(this.proposalForm.value);
    // lesson.course = this.lesson.course;

    proposal.user_id = this.authService.getCurrentUserId();

      this.bs.saveProposal(proposal).subscribe(res => {
        this.proposal = ProposalFactory.empty();

        // form wieder leeren (um neue erstellen zu können)
        this.proposalForm.reset(LessonFactory.empty());
      });
    }





  removeLesson(){
    if (confirm("Einheit wirklich entfernen?")){
      this.bs.remove(this.lesson.id)
        .subscribe(res => this.router.navigate(['../'], {relativeTo: this.route}));

    }
  }

}

