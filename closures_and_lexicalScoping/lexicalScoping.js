// Lexical Scoping

function outerFunction() {
    const name = "Karthik Shettigar";

    function innerFunction() {
        console.log(name);  // Karthik Shettigar
    }

    innerFunction();
}

outerFunction(); 