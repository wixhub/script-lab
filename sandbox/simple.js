var arrInJs = {
    newObj: "text"
};
//arr.newObj = null;
var messInJs = arrInJs;
console.log(messInJs);
console.log(messInJs.newObj);
messInJs = null;
console.log(messInJs);
console.log(this);
