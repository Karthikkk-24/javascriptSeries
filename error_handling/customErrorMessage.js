// Catch Error Messages

function validNumber (param) {
    if (param < 0) {
        alert("Invalid Number");
        throw new Error("Invalid Number");
    } else {
        console.log(param);
    }
}

try {
    validNumber(-1);
} catch (error) {
    console.log(error.message);
}