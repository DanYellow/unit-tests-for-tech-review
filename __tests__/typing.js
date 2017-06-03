const TITLE = 'Typing';

describe(TITLE, () => {
  test(`01 - ${TITLE}`, () => {
    expect(typeof true).toBe($);
  });

  test(`02 - ${TITLE}`, () => {
    var firstName = 'Bruce';
    var firstName2 = new String('Bruce');

    expect(firstName === firstName2).toBe($);
  });

  test(`03 - ${TITLE}`, () => {
    for (var i = 0; i < 6; i++) {}

    expect(i).toBe($);
  });
});


