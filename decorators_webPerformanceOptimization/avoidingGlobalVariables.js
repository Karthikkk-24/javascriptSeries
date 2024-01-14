// Avoiding Global Variables

const globalVar = 10;

(() => {
    const localVar = 20;
    console.log(localVar); // 20
})();

console.log(globalVar); // 10