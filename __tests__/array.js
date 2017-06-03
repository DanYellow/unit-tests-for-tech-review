test('01 - Index', () => {
  const array = [4, 3, 2];

  expect($).toBe(3);
});

test('02 - Segment', () => {
  const array = [4, 3, 2, 42, 50, 43, 21];

  expect($).toBe([42, 50, 43]);
});

test('03 - Fusion', () => {
  const array = [4, 3, 2];
  const array2 = [42, 50, 43, 21];

  expect($).toEqual([4, 3, 2, 42, 50, 43, 21]);
});

test('04 - New item', () => {
  const array = [4, 3, 2];

  expect($).toEqual([4, 3, 2, 42, 50]);
});

test('05 - Count items', () => {
  const array = [9, 3, 2, 3];

  expect($).toBe(4);
});

test('06 - Reducer', () => {
  expect(
    [3,2,1,0].reduce((total, val) => (total + val))
  ).toEqual($);
});

test('07 - Grab my name', () => {
  const array = [
    {name: 'Nestor'},
    {name: 'Serguei'},
    {name: 'Ghislaine'},
    {name: 'Amélia'},
    {name: 'Philippe'},
    {name: 'Norman'}
  ];

  expect($).toBe('Ghislaine');
});

test('08 - Grab my name uppercased', () => {
  const array = [
    'Nestor',
    'Serguei',
    'Ghislaine',
    'Amélia',
    'Philippe',
    'Norman'
  ];

  const expectedResult = [
    'NESTOR',
    'SERGUEI',
    'GHISLAINE',
    'AMÉLIA',
    'PHILIPPE',
    'NORMAN'
  ];

  expect($).toEqual(expectedResult);
});
