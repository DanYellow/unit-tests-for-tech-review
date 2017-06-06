const TITLE = 'Number';
describe(TITLE, () => {
  test(`01 - ${TITLE}`, () => {
    const str = '42';

    expect($).toBe(42);
  });

  test(`02 - ${TITLE}`, () => {
    const nb = 042;

    expect(isNan(nb)).toBe($);
  });

  test(`10 - ${TITLE}`, () => {
    const nb = 95;
    
    expect($).toBe('5f');
  });
});
