export class User {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public studies: string,
    public helper: boolean,
    public email: string,
  ) {
  }
}
