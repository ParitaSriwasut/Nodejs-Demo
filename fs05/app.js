const fs = require("fs/promises");

// fs.readFile("./input.json", "utf-8")
//   .then((rs) => {
//     let rs_obj = JSON.parse(rs);
//     rs_obj.sum = rs_obj.x + rs_obj.y;
//     return rs_obj;
//   })
//   .then((rs_obj) => {
//     let out = JSON.stringify(rs_obj);
//     let pm1 = fs.writeFile("./output.json", out);
//     return pm1;
//   })
//   .then(() => {
//     return fs.readFile("./output.json", "utf-8");
//   })
//   .then(console.log)
//   .catch((err) => console.log(err));

async function run() {
  try {
    let rs_obj = JSON.parse(await fs.readFile("./input.json", "utf-8"));
    rs_obj.sum = rs_obj.x + rs_obj.y;
    await fs.writeFile("./output.json", JSON.stringify(rs_obj));
    console.log(rs_obj);
  } catch {
    console.log(err);
  }
}
run();
