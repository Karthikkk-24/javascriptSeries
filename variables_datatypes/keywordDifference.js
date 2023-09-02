function something() {
    var something = 1234;
    var something = 5678;
    console.log(something);
}

something(); // 5678

function nothing() {
    let something = 1234;
    let something = 5678;
    console.log(something);
}

nothing(); // SyntaxError: Identifier 'something' has already been declared