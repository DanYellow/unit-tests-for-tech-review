const TITLE = 'String';

describe(TITLE, () => {
  test('01 - String', () => {
    expect($).toBe('hello me');
  });

  test('10 - Hexadecimal', () => {
    const string = '5f';
    expect($).toBe(95);
  });
});
