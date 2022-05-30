import {Lesson, Proposal, User} from "./proposal";
import {Course} from "./course";

export class ProposalFactory {


  static empty(): Proposal {
    return new Proposal(
      '0',
      new Date(),
      'unbeantwortet',
      new User('','', '', '', "student", ''),
      0,
      new Lesson('0', '', '', '','verfügbar', new User('','', '', '', "helper", ''), 0, new Course('0','', '', ''), '0', new Date(), new Date()),
      ''
    );
    }

  static fromObject(rawProposal: any): Proposal {
    return new Proposal(
      rawProposal.id,
      rawProposal.message,
      rawProposal.time,
      rawProposal.status,
      rawProposal.user,
      rawProposal.user_id,
    );

  }
}
