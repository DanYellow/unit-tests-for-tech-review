const TITLE = 'Good practices';

describe(TITLE, () => {
  test(`01 - ${TITLE}`, () => {
    var account = 150;

    expect(true).toBeTruthy();
  });

  test(`02 - ${TITLE}`, () => {
    const salary = 1500;

    if (salary > 2000) {
      console.log('I\'m rich !');
    }

    expect(true).toBeTruthy();
  });

  test(`03 - ${TITLE}`, () => {
    const myObj = {
      firstname: 'Java',
      lastname: 'Stript'
    };

    const patronym = myObj.firstname + ' ' + myObj.lastname;
    
    expect(true).toBeTruthy();
  });


  test(`04 - ${TITLE}`, () => {
    if ('42' == 42) {
      console.log('It is the statement of everything');
    }
    
    expect(true).toBeTruthy();
  });

  test(`05 - ${TITLE}`, () => {
    const myObj = {
      firstname: 'Java',
      lastname: 'Stript'
    };

    const firstname = myObj.firstname;
    const lastname = myObj.lastname;
    
    expect(true).toBeTruthy();
  });

  test(`07 - ${TITLE}`, () => {
    const myArray = [1, 3, 4, 6, 2, 6, 7, 9, 0];

    const firstValue = myArray[0];
    const restOfArray = myArray.slice(1, myArray.length-1);
    
    expect(true).toBeTruthy();
  });
});
