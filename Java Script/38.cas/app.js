// promises
// promise chaiging, reject, resolve, then, catch, finally

// create promise

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rand = Math.random();
    if (rand > 0.5) {
      console.log("we are in resolve");
      resolve("resolve");
    } else console.log("we are in recejct");
    resolve("reject");
  }, 1000);
});

console.log(promise);
promise
  .then((result) => {
    console.log("i am at the beggining of first then");
    console.log(result);
    return Promise.resolve("second promise");
  })
  .then((result) => {
    console.log("i am at the beggining of second then");
    console.log(result);
    return Promise.reject("Third promise");
  })
  .catch((reject) => {
    console.log(reject);
  })
  .finally(() => {
    console.log("I heppen every time");
  });

// fetchApp

fetch("https://randomuser.me/api/")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
