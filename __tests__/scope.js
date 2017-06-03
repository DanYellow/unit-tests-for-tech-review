const TITLE = 'Scope';

describe(TITLE, () => {
  test('01 - Scope', () => {
    const myFunc = function() {
      let myVar = 56;
      {
        let myVar = 43;
      }

      {
        let myVar = 40;
      }

      {
        let myVar = 87;
      }

      return myVar;
    }

    expect(myVar).toBe($);
  });

  test('02 - Scope', () => {
    for (let i = 0; i <= 7; i++) {}

    expect(i).toBe($);
  });
});
