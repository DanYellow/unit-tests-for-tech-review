const TITLE = 'EcmaScript Next';

describe(TITLE, () => {
  // test(`02 - ${TITLE}`, () => {
    

    

  //   async function fetchAPI () {
  //     let resultAPI = await delayedLocalAPI();
  //   };
  //   fetchAPI().then((response) => {
  //     expect(data).toEqual(myLocalAPI)
  //   });




  // });
  
  test('works with async/await', async () => {
    const delayedLocalAPI = () => (
      new Promise(resolve => {
        const myLocalAPI = {
          firstname: 'Bruce',
          lastname: 'Wayne',
          secret_identity: 'Batman'
        };

        setTimeout(() => {
          resolve(myLocalAPI)
        }, 0)
      })
    )
    
    expect.assertions(1);
    const data = await delayedLocalAPI(4);
    expect(data).toEqual(myLocalAPI);
  });

  test(`03 - ${TITLE}`, () => {
    const myArray = [1, 3, 4, 6, 2, 6, 7, 9, 0];

    expect($).toBe([1]);
    expect($).toBe([3, 4, 6, 2, 6, 7, 9, 0]);
  });
});
