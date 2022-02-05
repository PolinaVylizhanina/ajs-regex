import Validator from '../app';

const user1 = new Validator('Polina');
const user2 = new Validator('Polina_polina');
const user3 = new Validator('Polina-privet');
const user4 = new Validator('Polina_25');
const user5 = new Validator('__Polina');
const user6 = new Validator('Polina-');
const user7 = new Validator('P}oli}na');
const user8 = new Validator('25Polina');
const user9 = new Validator('P0000lina');

test('Should Return true', () => {
  expect(user1.validateUsername()).toBe(true);
});

test('Should Return true', () => {
  expect(user2.validateUsername()).toBe(true);
});

test('Should Return true', () => {
  expect(user3.validateUsername()).toBe(true);
});

test('Should return false', () => {
  expect(user4.validateUsername()).toBe(false);
});

test('Should return false when used number or any symbol in start position of the name', () => {
  expect(user5.validateUsername()).toBe(false);
});

test('Should return false', () => {
  expect(user6.validateUsername()).toBe(false);
});

test('Should Return false', () => {
  expect(user7.validateUsername()).toBe(false);
});

test('Should return false', () => {
  expect(user8.validateUsername()).toBe(false);
});

test('Should return false', () => {
  expect(user9.validateUsername()).toBe(false);
});