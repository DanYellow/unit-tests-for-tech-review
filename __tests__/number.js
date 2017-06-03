const TITLE = 'Number';
describe(TITLE, () => {
  test('01 - String', () => {
    const str = '42';

    expect($).toBe(42);
  });

  test('10 - Hexadecimal', () => {
    const number = 95;
    
    expect($).toBe('5f');
  });
});
