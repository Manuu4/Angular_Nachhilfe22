import {Component, Input, OnInit} from '@angular/core';
import {Lesson} from "../shared/lesson";
import {Proposal} from "../shared/proposal";
import {AuthenticationService} from "../shared/authentication.service";
import {NachhilfeService} from "../shared/nachhilfe.service";
import {$e} from "@angular/compiler/src/chars";
import {LessonFactory} from "../shared/lesson-factory";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {catchError, Observable, retry} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'div.bs-proposal-list-item',
  templateUrl: './proposal-list-item.component.html',
  styles: []
})
export class ProposalListItemComponent implements OnInit {

  lesson: Lesson = <Lesson>({});
  proposals: Proposal[] = [];

  @Input() proposal: Proposal | undefined;

  constructor(
    private authService: AuthenticationService,
    private bs: NachhilfeService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  userIsHelper() {
    return this.authService.userIsHelper();

  }

  acceptLesson(time: any, taker: any, lesson_id: any, proposal_id: any) {
    console.log(time);
    console.log(taker);
    console.log(lesson_id);
    console.log(proposal_id);
    console.log("proposal: " + this.proposal);
    lesson_id = lesson_id.toString();
    this.bs.getSingle(lesson_id).subscribe(lesson => {
      this.lesson = lesson;
      this.lesson.truetimeslot = time;
      this.lesson.taker = taker;
      this.lesson.status = "vergeben";
      this.bs.update(this.lesson).subscribe(lesson => {
        this.lesson = lesson;
      });
    });
    // this.bs.findProposalByLessonId(lesson_id).subscribe(res => this.proposals = res);
    this.acceptOrDenie(lesson_id, proposal_id);

    // this.bs.update(lesson).subscribe(res => this.lesson = res);
  }

  acceptOrDenie(lesson_id: any, proposal_id: any) {
    console.log("hey");
    console.log(lesson_id);
    console.log(proposal_id);
    this.bs.findProposalByLessonId(lesson_id).subscribe(res => {
      this.proposals = res;

      for (let i = 0; i < this.proposals.length; i++) {
        if (this.proposals[i].id == proposal_id) {
          this.proposals[i].status = "akzeptiert";
        } else {
          this.proposals[i].status = "abgelehnt";
        }
        this.bs.updateProposal(this.proposals[i]).subscribe(proposal => {
          this.proposal = proposal
        });
      }
    });


  }

  removeProposal(id: any) {
    this.bs.deleteProposal(id).subscribe(proposal => {
      this.proposal = proposal
    });
  }

  denieLesson(lesson_id: any)
  {
    this.bs.findProposalByLessonId(lesson_id).subscribe(res => {
      this.proposals = res;
        console.log(this.proposals);
        console.log("hi");
        console.log(this.proposals[0]);
        console.log(this.proposals[0].status);

        this.proposals[0].status = "abgelehnt";
        this.bs.updateProposal(this.proposals[0]).subscribe(proposal => {
          this.proposal = proposal
        });
    }
      );

  }

}
