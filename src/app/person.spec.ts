import { Person } from './person';

describe('Person', () => {
  it('should create an instance', () => {
    expect(new Person(1, 'zé', '2342342', 'FRENCH')).toBeTruthy();
  });
});
