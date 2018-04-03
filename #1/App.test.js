import { hello } from './App';

describe('hello', () => {
  it('should output hello', () => {
    expect(hello()).toBe('Hello');
  });
});
