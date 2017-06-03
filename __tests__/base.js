test('01 - Falsy', () => {
  expect($).toBeFalsy();
});

test('02 - Truthy', () => {
  expect($).toBeTruthy();
});

test('03 - Loop', () => {
  for (var i = 0; i < 6; i++) {}

  expect(i).toBe($);
});

test('04 - String', () => {
  const hello = 'Hello';
  const world = 'world';

  expect($).toBe('Helloworld');
});

test('05 - Coalescence', () => {
  const test = null || 42;

  expect(test).toBe($);
});


test('06 - Statements 1', () => {
  expect(false || true).toBe($);
});

test('07 - Statements 2', () => {
  expect(false && true).toBe($);
});
