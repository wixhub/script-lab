interface arr {
  newObj: string | null;
}

const arr = {
  newObj: "text",
};

//arr.newObj = null;

let mess = arr;

console.log(mess);
console.log(mess.newObj);

mess = null; // ERROR: Type 'null' is not assignable to type '{ newObj: string; }'.ts(2322)

console.log(mess);
console.log(this);
