const obj = {
  name: "Javier",
  age: 23,
  country: "MX",
};

let { nameL, ...all } = obj;
console.log(all);

const obj3 = {
  name: "Javier",
  age: 23,
};

const obj2 = {
  ...obj3,
  country: "mx",
};

console.log(obj2);

/**
 * Promise Finally
 */
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("Hello World!");
        }, 3000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((result) => console.log("result -> ", result))
  .catch((err) => console.log("err -> ", err))
  .finally(() => console.log("finalizó"));

/**
 * Regex
 */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-28");
const year = match[1];
const month = match[2];
const day = match[3];
console.log("Date -> ", year, month, day);
