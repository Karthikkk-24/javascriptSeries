// Singleton Pattern

const Singleton = (function() {
    let instance;

    function createInstance() {
        return {
            connect: function() {
                console.log('Connected');
            }
        };
    }
    
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }


            return instance;
        }
    }
})();

const connection1 = Singleton.getInstance();
const connection2 = Singleton.getInstance();

console.log(connection1 == connection2); // true;
