/*
Can a value be both true and false?
Define omniBool so that it returns true for the following:
  omniBool == true && omniBool == false
*/


// Solution

const omniboolean = {
  value: false,
  valueOf: () => {
    this.value = !this.value;
    return this.value
  }
}

// or

class OmniBool{
  constructor(){
    this.n = false;
  }
}
OmniBool.prototype[Symbol.toPrimitive] = function() { 
  this.n = !this.n;
  return this.n;
};
const omnibool = new OmniBool();