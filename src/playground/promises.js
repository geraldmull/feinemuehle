// promises live inside firebase library
// method calls like set
// resolve can only be used for a single argument
// more arguments it must be an object

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Andrew',
        age: 26
      });
      // reject('Something went wrong!');
    }, 5000);
  });
  
  console.log('before');
  
  promise.then((data) => {
    console.log('1', data);
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('This is my other promise');
      }, 5000);
    });
  }).then((str) => {
    console.log('does this run?', str);
  }).catch((error) => {
    console.log('error: ', error);
  });
  
  console.log('after');
  