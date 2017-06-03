// ▼ ---- Can't touch this !
class Animal {
  constructor(name) {
    this.name = name;
  }

  whoIam() {
    return `I'm an ${this.name}`;
  }
}
// ▲ ---- Can't touch this !

const TITLE = 'Oriented Object Programming'
describe(TITLE, () => {
  test('01 - OOP', () => {
    expect($).toBe('I\'m an Animal');
  });

  test('02 - OOP', () => {

    expect($).toBe('I');
  });
});
