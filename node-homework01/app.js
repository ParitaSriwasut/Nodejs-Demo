const fs = require("fs/promises");

const promisesProducts = () => {
  fs.readFile("./products.json", "utf-8")
    .then((data) => {
      const products = JSON.parse(data);
      console.log(products); //Array of objects

      const summary = products.reduce(
        (acc, product) => {
          if (acc[product.category.name]) {
            acc[product.category.name] += 1;
          } else {
            acc[product.category.name] = 1;
          }
          acc["all"] += 1; //update all products value
          return acc; //need to return the accumulator.
        },
        { all: 0 } //update acc value
      );

      return fs.writeFile("./summary.json", JSON.stringify(summary));
    })
    .then(() => {
      console.log("Summary file written successfully.");
    })
    .catch((err) => {
      console.error("An error occurred:", err);
    });
};

promisesProducts();

//use reduce to sum the products and check product condition with if/else
//in boolean if value is 0 will return false
//that's why I assign products name to 1 for let if/else works
