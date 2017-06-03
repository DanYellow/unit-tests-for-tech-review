const TITLE = 'EcmaScript Next';

describe(TITLE, () => {
  test(`03 - ${TITLE}`, () => {
    const myArray = [1, 3, 4, 6, 2, 6, 7, 9, 0];

    expect($).toBe([1]);
    expect($).toBe([3, 4, 6, 2, 6, 7, 9, 0]);
  });

  test(`10 - ${TITLE}`, async () => {
    const myLocalAPI = {
          firstname: 'Bruce',
          lastname: 'Wayne',
          secret_identity: 'Batman'
        };

    const delayedLocalAPI = () => (
      new Promise(resolve => {
        setTimeout(() => {
          resolve(myLocalAPI)
        }, 0)
      })
    )

    expect($).toEqual(myLocalAPI);
  });
});
