// Module Pattern

const userModule = (function () {
    let privateData = 'This is some private data.';

    function privateMethod() {
        console.log('Private Method'); // Private Method
    }

    return {
        publicData: 'This is some public data.',
        publicMethod: function () {
            console.log('Public Method'); // Public Method
            privateMethod();
        }
    }
})();

console.log(userModule.publicData); // This is some public data.
userModule.publicMethod();