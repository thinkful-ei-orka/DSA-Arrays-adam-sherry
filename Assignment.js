const Memory = require('./Memory.js');
let memory = new Memory;
/*
////1

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }

  pop() {
    if (this.length === 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }
}

////2

function main() {
  Array.SIZE_RATIO = 3;
  let arr = new Array();
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);
  console.log(arr.get(0));
  arr.pop();
  arr.pop();
  arr.pop();
  arr.push('tauhida');
  console.log(arr.get(0));
}
main();
*/
// single push: Array { length: 1, _capacity: 3, ptr: 0 }
// list push: Array { length: 6, _capacity: 12, ptr: 3 }

////3

//Array { length: 3, _capacity: 12, ptr: 3 }

////4

// result = NaN: Float64 will only take numbers, doesn't allow for string inputs
// resize is intended to increase the allocated array size depending on what is contained (or needs to be contained) within it

/////5
// Complexity - O(n) - scales with size of input string

function URLify(input) {
  return input.replace(/\s/g, '%20');
}

// console.log(URLify('tauhida parveen'));
// console.log(URLify('www.thinkful.com /tauh ida parv een'));

////6
// Complexity - O(n) - single loop to iterate through the array

function filter5(array) {
  let result = [];
  array.forEach(val => val < 5 ? null : result.push(val));
  return result;
}

// console.log(filter5([10, 1, 9, 2, 8, 3, 7, 4, 6, 5]));

////7
// Coplexity - O(n^2) - double for loop to iterate

function maxSum(array) {
  let maxValue = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let sum = array.slice(i, j + 1).reduce((a, b) => a + b);
      sum > maxValue ? maxValue = sum : null;
    }
  }
  return maxValue;
}

// console.log(maxSum([4, 6, -3, 5, -2, 1]));

////8
// Complexity - O(n)

// O(n^2) const concatArrays = (first, second) => [...first,...second].sort((a,b)=>a-b);

function concatArrays(first, second) {
  let result = [];
  let index = first.length + second.length - 1;
  while (index >= 0) {
    if (first[first.length - 1] === second[second.length - 1]) {
      result[index] = first.pop();
      index--;
      result[index] = second.pop();
    } else if (first[first.length - 1] > second[second.length - 1] || second.length === 0) {
      result[index] = first.pop();
    } else {
      result[index] = second.pop();
    }
    index--;
  }
  return result;
}

const a = [2, 3, 6, 8, 11];
const b = [1, 3, 5, 8, 9, 10];
// console.log(concatArrays(a, b));

////9
//Complexity - O(n) - single pass through the string

function removeYourCharacter(input, removal) {
  const regex = new RegExp(`[${removal}]`, 'gi');
  return input.replace(regex, '');
}

// console.log(removeYourCharacter('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

////10
// Complexity - O(n^2) - loop for reduce/product, loop for replacement/division

function products(array) {
  const product = array.reduce((a, b) => a * b);
  return array.map(value => product / value);
}

// console.log(products([1,3,9,4]))

////11
// Complexity - O(n^3)

function blackout(array) {
  let result = JSON.parse(JSON.stringify(array));
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      result[i][j] = [...array[i], ...array.map(row => row[j])].reduce((a, b) => a + b) < array.length + array[i].length ? 0 : 1;
    }
  }
  return result;
}

console.log(blackout(
  [[1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1]]
));

////12
// Complexity - O(n^2) - for loop + iteraror for str2 change
function isRotation(str1, str2) {
  str2 = str2.split('');
  for (let i = 0; i < str2.length; i++) {
    if (str1 === str2.join('')) {
      return true;
    }
    else {
      str2 = [...str2.slice(1), str2[0]];
    }
  }
  return false;
}
// console.log(isRotation('amazon', 'aoznam'));