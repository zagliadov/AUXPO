const { readFile, writeFile } = require("fs");
const path = require("path");

const encoding = "utf8";
const firstFilePath = path.resolve(__dirname, "content", "first.txt");
const secondFilePath = path.resolve(__dirname, "content", "second.txt");
const resultAsync = path.resolve(__dirname, "content", "result-async.txt");

readFile(firstFilePath, encoding, (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile(secondFilePath, encoding, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile(resultAsync, `Here is the result : ${first}, ${second}`, (err, result) => {
      if(err) {
        console.log(err);
        return
      }
      console.log(result)
    });
  });
});
