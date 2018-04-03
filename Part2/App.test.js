import { hello, add } from './App';

describe('hello', () => {
  it('should output hello', () => {
    expect(hello()).toBe('Hello');
  });
});

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(2, 2)).toBe(4);
    expect(add(12, 2)).toBe(14);
    expect(add(-2, 2)).toBe(0);
    expect(add(-2, -2)).toBe(-4);
  });
  it('should not add strings', () => {
    expect(add(2, '2')).toBe(null);
  });
  it('should not add objects', () => {
    expect(add(2, {})).toBe(null);
  });
  it('should not add arrays', () => {
    expect(add(2, [])).toBe(null);
  });
});
