import {
  isKo,
  removeSpecialCharacters,
  isSentences,
  isEmpty,
} from './utils';

test('isKo', () => {
  expect(isKo('한글')).toBe(true);
  expect(isKo('English')).toBe(false);
});

test('removeSpecialCharacters', () => {
  expect(removeSpecialCharacters('한.글')).toBe('한글');
  expect(removeSpecialCharacters('특수문자')).toBe('특수문자');
});

test('isSentences', () => {
  expect(isSentences('나는 개발을 한다')).toBeTruthy();
  expect(isSentences('밥')).toBeFalsy();
});

test('isEmpty', () => {
  expect(isEmpty([])).toBeTruthy();
  expect(isEmpty(undefined)).toBeTruthy();
  expect(isEmpty(null)).toBeTruthy();
  expect(isEmpty([1, 2, 3])).toBeFalsy();
});
