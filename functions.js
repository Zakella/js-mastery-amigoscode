function addNumber(a, b){
    return a + b;

}

console.log(addNumber(10, 15));

const someFunc = (a, b) => {
    return a+b;
}

console.log(someFunc(addNumber(15, 25), 10));


const someFunc2 = (a, b) =>
    (a+b)//() вместо return

console.log(someFunc2(20 , 100));