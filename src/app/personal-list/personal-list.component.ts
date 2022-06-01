import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../shared/authentication.service";
import {NachhilfeService} from "../shared/nachhilfe.service";
import {Lesson} from "../shared/lesson";
import {NgModule} from '@angular/core';
import {Proposal} from "../shared/proposal";
import {empty} from "rxjs";

@Component({
  selector: 'bs-personal-list',
  templateUrl: './personal-list.component.html',
  styles: []
})
export class PersonalListComponent implements OnInit {

  lessons: Lesson[] = [];
  proposals: Proposal[] = [];
  proposalsSent: Proposal[] = [];

  @Output() showDetailsEvent = new EventEmitter<Lesson>();
  @Output() showProposalDetailsEvent = new EventEmitter<Proposal>();
  @Output() showProposalSentDetailsEvent = new EventEmitter<Proposal>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private bs: NachhilfeService,
  ) {
  }

  ngOnInit(): void {
    let studentId = this.authService.getCurrentUserId().toString();
    console.log(studentId);
    this.bs.findLessonsByTakerId(studentId).subscribe(res => {
      this.lessons = res;
      this.getProposals();
      this.getProposalsSent(studentId);
    });
  }


  getProposals() {
    for (let i = 0; i < this.lessons.length; i++) {
      this.bs.findProposalByLessonId(this.lessons[i].id).subscribe(res => this.proposals.push(...res));
    }
  }

  getProposalsSent($id: string) {
    this.bs.findProposalByUserId($id).subscribe(res => this.proposalsSent = res);
  }


  showDetails(lesson: Lesson) {

    this.showDetailsEvent.emit(lesson);
  }

  showProposalDetails(proposal: Proposal) {

    this.showProposalDetailsEvent.emit(proposal);
  }

  showProposalSentDetails(proposalSent: Proposal) {

    this.showProposalSentDetailsEvent.emit(proposalSent);
  }

  userIsHelper() {
    return this.authService.userIsHelper();
  }


}
