let array =[2,3,4,5,6,7,8,9,10];

// const mapArray = array.map(function(item, index, array){
//     console.log(item, index, array);
//     return item;
// });
// console.log(mapArray);

Array.prototype.myMap = function(callback){
    var T, A, i;
    if (this === null) {
        throw new TypeError('this is null or not defined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    var O = Object(this);
    var len = O.length >>> 0;
    if (arguments.length > 1) {
        T = arguments[1];
    }
    A = new Array(len);
    for(i=0; i< len; i++) {
        A[i] = callback.call(T, O[i], i, O);
    }
    return A;
};

const myMapArray = array.myMap(function(item, index, array){
    return item * 2;
});

console.log(myMapArray);

Array.prototype.myFilter = function(cb) {
    var res = [];
    for(var i=0;i< this.length; i++) {
        if(cb.call(undefined, this[i], i, this)){
            res.push(this[i]);
        }
    }
    return res;
}

const myFilterArray = array.myFilter(function(item, index, array){
    return item % 2 === 0;
});

console.log(myFilterArray);

Array.prototype.reduceM = function(cb) {
    var value = arguments[1];
    for(var i=0;i < this.length; i++) {
        value = cb(value, this[i], i, this);
        console.log(value);
    }
    return value;

}

const mytotal = array.reduceM(( accumulator, currentValue ) => accumulator + currentValue, 0);
console.log(mytotal);
let total = [ 0, 1, 2, 3 ].reduce(( accumulator, currentValue ) => accumulator + currentValue, 0);
console.log(total);


let personObj = {
    name: 'Amarkant',
    age: 32,
    greet: function() {
        console.log(this);
        console.log(`Hi My name is ${this.name} and I am ${this.age} years old.`);
    }
}
const g = personObj.greet.bind(personObj);
function greetMsg(){
    console.log(`Hello ${this.name} !`);
}

greetMsg = greetMsg.bind(personObj);
greetMsg();
g();
console.log(personObj.greet());

Function.prototype.bind1 = function(){
    var slice = Array.prototype.slice;
    var args = slice.call(arguments,1);
    var thisObj = arguments[0];
    var thisFun = this;
    return function(){
        return thisFun.apply(thisObj, args.concat(slice.call(arguments)));
    }
};

const g1 = greetMsg.bind1(personObj);
const g2 = personObj.greet.bind1(personObj);
g1();
g2();

let basic = {
    'name': 'shyam',
    'age': 24
  };
  
  function callMe(city) {
    console.log('Hi! my name is ' + this.name + ' and my age is ' + this.age + ' and my city is ' + arguments[0] + ' and state is ' + arguments[1]);
  }
  let callBinded = callMe.bind1(basic, 'jammu');
  callBinded('j&k');


  (function(){
  
    function debounce(fn, delay) {
        var time;
        return function() {
            const args = arguments;
            clearTimeout(time);
            time = setTimeout(function() {
                fn.apply(this, args);
            }.bind(this), delay);


            // const args = arguments;
            // const context = this;
            // clearTimeout(time);
            // time = setTimeout(function() {
            //     fn.apply(context, args);
            // }, delay);
        };
    }
    // const debounce = (func, delay) => {
    //     let inDebounce
    //     return function() {
    //       const context = this
    //       const args = arguments
    //       clearTimeout(inDebounce)
    //       inDebounce = setTimeout(() => func.apply(context, args), delay)
    //     }
    // }
    function onKeyPress(e){
        console.log(e.target.value);
    }
    const sreachInput = document.getElementById('sreachInput');
    sreachInput.addEventListener('keypress', debounce(onKeyPress, 300));
  })()