const abc = require('./index.js');

test('ABC blocks test', () => {
  const characters = "BO XK DQ CP NA GT RE TG QD FS JW HU VI AN OB ER FS LY PC ZM";

  expect(abc("A", characters)).toBeTruthy();
  expect(abc("BARK", characters)).toBeTruthy();
  expect(abc("BOOK", characters)).toBeFalsy();
  expect(abc("TREAT", characters)).toBeTruthy();
  expect(abc("COMMON", characters)).toBeFalsy();
  expect(abc("SQUAD", characters)).toBeTruthy();
  expect(abc("CONFUSE", characters)).toBeTruthy();
});
