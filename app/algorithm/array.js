// literal syntax
const arr = [1,2,3,3,3,4,5];

// array class and fill method with default value, 
// if you want a range we can use a map 
const arr2 = Array(100).fill(0).map((_,i) => i +1);


const arr3 = [...Array(100).keys()];

const unique = [...new Set(arr)]

// algorithm
// Create a function that takes an array of numbers and returns a number that is the sum of all values in the array.

const sum = [1,3,5,7]

// solution 1
function cumulativeSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// solution 2

function cumulativeSumReduce(arr) {
    return arr.reduce((acc, cur, ) => {
        acc + cur
    } , 0)
}

console.log('sum:', cumulativeSum(sum))
console.log('sum:', cumulativeSumReduce(sum))

// Create a function that takes a sorted array and a target value. Return the index of the target value in the array. If the target value is not in the array, return -1.
const sortedArr = ['a', 'b', 'c', 'x', 'y', 'z'];

// most vague way of search
function targetArr(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }
    }
    return -1
}

// Binary Search

function binarySearch(arr, target, start=0, end=arr.length-1) {
     if(start > end) {
        return -1;
     }

     const middle = Math.floor((start + end) /2);

     if(arr[middle] === target) {
        return middle
     }

     if(arr[middle] > target) {
        return binarySearch(arr, target, start, middle-1)
     }

     if(arr[middle] < target) {
        return binarySearch(arr, target, middle+1, end)
     }

}


console.log('target index:', targetArr(sortedArr, 'd'))
console.log('target index:', binarySearch(sortedArr, 'c'))

// Create a data structure that implements the requirements of a Least Recently Used (LRU) cache with O(1) average time complexity.

// Initialize an object with a maxium capacity of elements.
// getItem Return the value of the key. Update cache with the most recently used key.
// putItem Create or update a key value pair in the cache. Evict the least recently used key if the size of keys exceeds the max capacity.

class LRU {

    constructor() {
        this.capacity = capacity;
        this.cache = new Map(); 
    }

    getItem(key) {

        // Map keeps track of insertion order, this will refresh the item
        const item = this.cache.get(key)

        if(item) {
            this.cache.delete(key);
            this.cache.set(key, item);
        }
        return item
    }

    get oldestItem() {
        return this.cache.keys().next().value;
    }

    putItem(key, val) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }

        else if (this.cache.size == this.capacity) {
            this.cache.delete(this.oldestItem);
        }

        this.cache.set(key, val);
    }
}