export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) {}
}

export const LessonFormMessages = [
  new ErrorMessage('title', 'required', 'Titel wird benötigt'),
  new ErrorMessage('timeslot1', 'required', 'Mindestens ein Termin wird benötigt'),
  new ErrorMessage('course', 'required', 'Kurs wird benötigt'),
  // new ErrorMessage('title', 'titleExists', 'Dieser Titel existiert bereits')

];
