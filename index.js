const isObject = (data) => typeof data === 'object';
const isArray = (data) => Object.prototype.toString.call(data) === '[object Array]';

const deepClone = (data) => {
  let clone; // can be a premitive, an array or an object

  if (!isObject(data) || data === null) {
    clone = data;
    return clone;
  }

  // when data is an array
  if (isArray(data)) {
    clone = [];
    for (let i = 0; i < data.length; i += 1) {
      clone[i] = deepClone(data[i]);
    }
  }

  // when data is an object
  clone = {};
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      if (!isObject(data[key])) {
        clone[key] = data[key];
      } else {
        // when the key is itself an object (nested object)
        clone[key] = deepClone(data[key]);
      }
    }
  }
  return clone;
}

/**
 * Looking for a shortcut? Use the in-built API
 * const clone = JSON.parse(JSON.stringify(data));
 */


// (() => {
//   console.log('Deep Clone in action');
//   console.log('deepClone(10) ==>', deepClone(10));
//   console.log('deepClone([1, true, "hello"]) ==>', deepClone([1, true, "hello"]));
//   console.log('deepClone({ name: "John", age: 10}) ==>', deepClone({ name: "John", age: 10 }));
//   console.log('deepClone({ name: "John", address: { city: "LA" }}) ==>', deepClone({ name: "John", address: { city: "LA" } }));
// })();