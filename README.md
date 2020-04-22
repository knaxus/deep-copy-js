# deep-copy-js

Deep copy implementation for pactice. 

## Usage

```javascript

(() => {
  console.log('Deep Clone in action');
  console.log('deepClone(10) ==>', deepClone(10));
  console.log('deepClone([1, true, "hello"]) ==>', deepClone([1, true, "hello"]));
  console.log('deepClone({ name: "John", age: 10}) ==>', deepClone({ name: "John", age: 10 }));
  console.log('deepClone({ name: "John", address: { city: "LA" }}) ==>', deepClone({ name: "John", address: { city: "Delhi" } }));
})();

```

### Using a shortcut

```javascript

const clone = JSON.parse(JSON.stringify(data));

```
