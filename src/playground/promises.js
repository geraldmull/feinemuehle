// promises live inside firebase library
// method calls like set
// resolve can only be used for a single argument
// more arguments it must be an object

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
/*         resolve({
            name: 'gerald',
            age: 40
    }); */
    reject('something went wrong!');
        } ,1500);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('error', error);
});

console.log('after');