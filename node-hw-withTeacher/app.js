const fs = require("fs/promises");
const path = require("path");

const products = path.resolve("resource", "products.json");
const summary = path.resolve("resource", "summary.json");

const getFile = (file) => fs.readFile(file, "utf-8");

// getFile(products).then((raw) => {
//   let data = JSON.parse(raw);
//   let output = data.reduce(
//     (a, b) =>
//     {
//       if(caches.category.name === Clothes)
//       a.clothes += 1;
//       a.all += 1;
//       return a;
//     },
//     { all: 0, clothes: 0 }
//   );
// });

getFile(products)
  .then((raw) => {
    let data = JSON.parse(raw);
    let output = data.reduce(
      (a, c) => {
        if (!a[c.category.name]) a[c.category.name] = 0; // create a new key to put a value to it.
        a[c.category.name] += 1; //and update a value 0ne by one
        a.all += 1; // update all products value
        return a;
      },
      { all: 0 }
    );
    return fs.writeFile(summary, JSON.stringify(output, null, 4)); //decorate a string
  })
  .then(() => getFile(summary))
  .then(console.log());
