import { ExampleService } from './example.service';

describe('ExampleService', () => {
  it('should add numbers', () => {
    const s = new ExampleService();
    expect(s.add(2,3)).toBe(5);
  });
});
