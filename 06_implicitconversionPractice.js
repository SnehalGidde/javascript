console.log(`====================implicit convertion=================`);
// numeric string used with + gives string type

var result = `3` + 2;
console.log(`${result}`);

var result = `3` + undefined;
console.log(`${result}`);

var result = 4 - null;
console.log(`${result}`);

var result = `3` + null;
console.log(`${result}`);

console.log(`===============implicit boolean convertion to string=======`);

var result = `3` + false;
console.log(`${result}`);

var result = `3` - false;
console.log(`${result}`);

var result = 4 - false;
console.log(`${result}`);

var result = 4 + true;
console.log(`${result}`);

var result = `3` - true;
console.log(`${result}`);


console.log(`===============implicit string convertion to number=======`);

var result = `4` - `2`;
console.log(`${result}`);

var result = `4` + `2`;
console.log(`${result}`);

var result = `4` * `2`;
console.log(`${result}`);

var result = `4` / `2`;
console.log(`${result}`);

console.log(`===============Undefined used with number, boolean or null given NaN ===========`);

var result = 4 + undefined;
console.log(`${result}`);

var result = 4 - undefined;
console.log(`${result}`);

var result = true + undefined;
console.log(`${result}`);

var result = null + undefined;
console.log(`${result}`);