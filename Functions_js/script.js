function myFun() {
	console.log("Function is called");
}
function myFunction(x) {
	console.log(x * 2);
}
function sum(x, y) {
	let result = x + y;
	return result; // or return x + y;
	console.log("won't execute because after return");
	// the statement wont execute written after return
}
// using arrow operator
// compact way of writting functions
const printHello = () => {
	console.log("Hello world!");
};

myFun();
myFunction(2);
let ans = sum(3, 4);
console.log(ans);
