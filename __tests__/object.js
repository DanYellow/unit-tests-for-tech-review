test('01 - Object', () => {
  const obj = {
    firstname: 'Richard',
    lastname: 'Stallmann',
    age: null
  }

  expect($).toBe('Richard');
});

test('02 - Object', () => {
  const obj = {}

  expect($).toBe('Richard');
});

test('03 - Object', () => {
  const obj = {
    firstname: 'Richard',
    lastname: 'Stallmann',
    age: null,
    toString: function () {}
  }

  expect($).toBe('Richard Stallmann');
});

