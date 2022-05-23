import { LessonFactory } from './lesson-factory';

describe('LessonFactory', () => {
  it('should create an instance', () => {
    expect(new LessonFactory()).toBeTruthy();
  });
});
