// Memory Leak 

let data = {
    info: 'some information'
}

let reference = data;

data = null;
// as reference now also holds the value of the data, the data object can now be freed...
