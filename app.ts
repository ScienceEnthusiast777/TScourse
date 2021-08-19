//return types
function add(n1: number, n2: number): number {
  return n1 + n2;
}

//void return
function printResult(num: number): void {
  console.log("Result: ", num);
}

//undefined - rare use case, can only be used with empty return at the end
printResult(add(5, 12));
//technically the return type of print result would then be undefined and you could write it like this...
// function printResult(num: number): undefined {
//   console.log("Result: ", num);
//   return;
// }

//functions as types
let combiner: (a: number, b: number) => number = add;

function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
  const result = n1 + n2;
  cb(result);
}

//this works even though the return type is defined as void
addAndHandle(109, 20, (res) => {
  return res;
});

//unknown type
let userIput: unknown;
let username: string;
userIput = 4;
userIput = "hello";
userIput = false;

// username = userIput // wont work

//would work if userInput was set to any
//unknown is a bit less flexible than any

// never type

function generateError(message: string, code: number):never {
  throw { message: message, errorCode: code };
}

generateError("something happened", 500);

console.log(generateError("hello",200)) //this would crash the script because the function is not allowed to return anything 

//this can be used to just be clear that this should never return anything 

