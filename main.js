// "use strict";
/*
var obj = {
    num1: 20,
    num2: 30,
    sum: function() {
        var num = 10;
        function cal() {
            console.log('inside', this === obj);
            return this.num1 + num; 
        };
        cal = cal.bind(this);
        console.log('outside', this);
        return cal.apply(this);
        return cal.call(this);
    }
}
console.log(obj.sum());

*/

// var testObj = {q: 1};
// function isEmpty (obj) {
//     for(var index in obj) return false;
//     return true;
// }
// console.log(isEmpty(testObj));

// console.log(Array.prototype);


Object.defineProperty(Object, 'assign', {
    value: function assign(target) {
      'use strict';
      if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource !== null && nextSource !== undefined) { 
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });

  let target = {};

  Object.assign(target, {a:1},{b:2},{c:3});
  // console.log(target);

Array.isAr = function(ob) {
    if(Object.prototype.toString.call(ob) === '[object Array]') {
        return true;
    }
    return false;
}
// console.log(Array.isAr({}));


const sourceObject = {
    a: 1,
    b: {
        c: 2,
        d: 3,
        e: function() {

        },
        f: {
            g: 4,
            h: {
                i: 5,
                date: new Date().toISOString(),
                j: null,
                k: Infinity,
                l: undefined,
                m: Math.max,
                n: new Object(),
                o: [1,2,3,4]
            }
        }
    }
};
// console.log(sourceObject);
// console.log(JSON.parse(JSON.stringify(sourceObject)));

function cloneObject(obj) {
    var target = {};
    for(var key in obj) {
        if(typeof(obj[key]) === 'object' && obj[key] !== null) {
            target[key] = cloneObject(obj[key]);
        } else{
            target[key] = obj[key];
        }
    }
    return target;
}

// const targetObject = cloneObject(sourceObject);

// console.log(targetObject == sourceObject);



// var funcs = [];
// for (var i = 0; i < 3; i++) {
//   funcs[i] = function(i) {
//     console.log("My value: " + i);
//   }.bind(this, i);
// }
// for (var j = 0; j < 3; j++) {
//   funcs[j]();
// }

/*

var funcs = [];
function createfunc(i) {
  return function() {
    console.log("My value: " + i);
  };
}

for (var i = 0; i < 3; i++) {
  funcs[i] = createfunc(i);
}

for (var j = 0; j < 3; j++) {
  // and now let's run each one to see
  funcs[j]();
}
*/


// var buttons = document.getElementsByClassName("btn");
// for (var i = 0, len = buttons.length; i < len; i++) {
//     buttons[i].addEventListener("click", function(i) {
//         (function() {
//             console.log(i);
//         })()
//     }.bind(this, i));
// }


// const wait = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));
// for (var i = 0; i < 3; i++) {
//     wait(i * 1000).then(function(i){
//         console.log(i);
//     }.bind(this, i));
// }


/*

// Well, the problem is that the variable i, within each of your anonymous functions, 
// is bound to the same variable outside of the function.
const arr = [1,2,3];
const fns = [];
for(i in arr){
  fns.push(() => console.log(`index: ${i}`));
}

for(v of arr){
  fns.push(() => console.log(`value: ${v}`));
}

for(f of fns){
  f();
}
*/

const arr = [1,2,3];
const fns = [];
for(var i in arr){
  fns.push(function(i){
    console.log(`index: ${i}`);
  }.bind(this, i));
}
// for(var v of arr){
//   fns.push(() => console.log(`value: ${v}`));
// }
for(var f of fns){
  f();
}


/*
JavaScript does not have block scope. Variables introduced with a 
block are scoped to the containing function or script

*/

var funcs = [];
function createfunc(i) {
  return function() {
    console.log("My value: " + i);
  };
}

for (var i = 0; i < 3; i++) {
  funcs[i] = createfunc(i);
}

for (var j = 0; j < 3; j++) {
  // and now let's run each one to see
  funcs[j]();
}


var funcs = [];
    
for (var i = 0; i < 3; i++) {
    funcs[i] = (function(index) {
        return function() {
            console.log("index: " + index);
        };
    }(i));
}

for (var j = 0; j < 3; j++) {
    funcs[j]();
}

var funcs = [];
for (let i = 0; i < 3; i++) {
    funcs[i] = function () {
        console.log("My value: " + i);
    };
}
console.log('ak', funcs[0]());
console.log('ak', funcs[1]());

let string = "This is the test string";
let substr = 'tes'.trim();
const strLen = substr.length;
for(let i=0, len = string.length; i < len ; i+= strLen) {
    if(string.substr(i, strLen) === substr) {
        console.log('yes'); 
    }
}



const a = {
    i: 1,
    toString: function () {
      return a.i++;
    }
  }
  
  if(a == 1 && a== 2 && a ==3) {
    console.log('Hello World!', a == 4 && a==5);
    console.log('Hello World!', a);
  }

var b_ = 1;
var b = 2;
var _b = 3;
if(b_==1 && b== 2 &&_b==3) {
    console.log("Why hello there!")
}


var i = 0;

  with({
    get a() {
      return ++i;
    }
  })
  {
    if (a !== a)
      console.log("yep, this is printed.");
  }