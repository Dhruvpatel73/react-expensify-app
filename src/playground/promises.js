const promise = new Promise((resolve, reject) => {
    resolve('This is my resolved data');
});

console.log('Before');

promise.then((data) => {
    console.log('1', data);
});

promise.then((data) => {
    console.log('2', data);
});

console.log('After');