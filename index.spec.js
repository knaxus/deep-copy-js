const deepClone = require('.');

describe('TEST: Testing deepClone function', () => {
  test('Test: Deep Copy(first level)', () => {
    const person = { name: 'Jon' };
    expect(Object.is(deepClone(person), person)).toBe(false);
  });

  test('deepCopy nested (one level deep)', () => {
    const person = { name: 'Jon', addr: { home: 'Winterfell' } };
    expect(Object.is(deepClone(person.addr), person.addr)).toBe(false);
  });

  test('deepCopy deeply nested', () => {
    const person = {
      name: 'Jon',
      addr: {
        family: {
          biological: {
            name: 'Targaryen',
            sigil: 'Three Red Dragon',
          },
        },
      },
    };

    expect(
      Object.is(
        deepClone(person.addr.family.biological),
        person.addr.family.biological
      )
    ).toBe(false);
  });

  // huge arr
  test('Array of 10 million+ items', () => {
    const hugeArr = Array(10_000_000).fill('🔥');
    hugeArr[3000] = Array(3000).fill({ randNumber: Math.random() });

    expect(Object.is(deepClone(hugeArr)[3000], hugeArr[3000])).toBe(false);
  });

  // binaries
  test('Object Containing Binaries', () => {
    const bin = require('fs').readFileSync('index.spec.js', {
      encoding: 'binary',
    });

    const obj = {
      name: 'JavaScript',
      desc: {
        bin,
      },
    };

    expect(Object.is(deepClone(obj), obj)).toBe(false);
  });
});
