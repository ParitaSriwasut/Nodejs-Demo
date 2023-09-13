const fs = require("fs/promises");

const msg = "Codecamp 15";

fs.writeFile("./test.txt", msg).then(() => {
  console.log("write test.txt OK");
});
