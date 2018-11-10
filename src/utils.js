console.log('utils.js is running ...');

export const square = (x) => x * x;
const add = (a, b) => a + b;

// no a object definition
export { add };

// exports - default export - named exports