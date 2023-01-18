const fs = require("fs");
const path = require("path");

const request = require("request");

//const path = require("path");
let pathO = "/home/marcosb/Documentos/Plataforma5/w1/node-shell";
module.exports = {
  pwd: function () {
    process.stdout.write(process.argv[1]);
  },
  date: function () {
    process.stdout.write(Date());
  },
  ls: function (arr) {
    let path = arr.splice(1).join("");
    path = path.substring(0, path.length - 2);
    process.stdout.write(path);

    if (path === "") path = pathO;
    fs.readdir(path, (err, files) => {
      if (err) throw err;
      files.forEach(file => {
        process.stdout.write(file + "\n");
      });
    });
  },
  echo: function (arr) {
    process.stdout.write(arr.splice(1).join(" "));
  },
  cat: function (arr) {
    let file = arr.splice(1).join("");
    file = file.substring(0, file.length - 1);
    //process.stdout.write(file);
    let path = `${pathO}/${file}`;
    //process.stdout.write(path);
    fs.readFile(path, (err, data) => {
      if (err) throw err;
      process.stdout.write(data.toString());
      process.stdout.write("\nprompt > ");
    });
    //process.stdout.write("\nprompt > ");
  },
  tail: function (arr) {
    let file = arr.splice(1).join("");
    file = file.substring(0, file.length - 1);
    //process.stdout.write(file);
    let path = `${pathO}/${file}`;
    //process.stdout.write(path);
    fs.readFile(path, (err, data) => {
      if (err) throw err;
      let dataCut = data.toString().split("\n");
      //console.log(dataCut);
      dataCut = dataCut.splice(dataCut.length - 6).join("\n");
      process.stdout.write(dataCut);
      process.stdout.write("\nprompt > ");
    });
    //process.stdout.write("\nprompt > ");
  },
  head: function (arr) {
    let file = arr.splice(1).join("");
    file = file.substring(0, file.length - 1);
    //process.stdout.write(file);
    let path = `${pathO}/${file}`;
    //process.stdout.write(path);
    fs.readFile(path, (err, data) => {
      if (err) throw err;
      let dataCut = data.toString().split("\n");
      //console.log(dataCut);
      dataCut = dataCut.splice(0, 5).join("\n");
      process.stdout.write(dataCut);
      process.stdout.write("\nprompt > ");
    });
    //process.stdout.write("\nprompt > ");
  },
  sort: function (arr) {
    let file = arr.splice(1).join("");
    file = file.substring(0, file.length - 1);
    //process.stdout.write(file);
    let path = `${pathO}/${file}`;
    //process.stdout.write(path);
    fs.readFile(path, (err, data) => {
      if (err) throw err;
      let dataCut = data.toString().split("\n");
      //console.log(dataCut.sort());

      process.stdout.write(dataCut.sort().join("\n"));
      process.stdout.write("\nprompt > ");
    });
    //process.stdout.write("\nprompt > ");
  },
  wc: function (arr) {
    let file = arr.splice(1).join("");
    file = file.substring(0, file.length - 1);
    //process.stdout.write(file);
    let path = `${pathO}/${file}`;
    //process.stdout.write(path);
    fs.readFile(path, (err, data) => {
      if (err) throw err;
      let dataCut = data.toString().split("\n");
      let Lines = dataCut.length;
      let Char = 0;
      let Words = 0;
      Words = dataCut.reduce((a, x) => x.trim().split(" ").length + a, 0);

      Char = dataCut.reduce(
        (a, x) => x.split(" ").reduce((a, x) => x.length + a, 0) + a,
        0
      );

      console.log(Char);

      process.stdout.write(
        `Lines = ${Lines}\nChar = ${Char}\nWords = ${Words}`
      );
      process.stdout.write("\nprompt > ");
    });
    //process.stdout.write("\nprompt > ");
  },
  uniq: function (arr) {
    let file = arr.splice(1).join("");
    file = file.substring(0, file.length - 1);
    //process.stdout.write(file);
    let path = `${pathO}/${file}`;
    //process.stdout.write(path);
    fs.readFile(path, (err, data) => {
      if (err) throw err;
      let dataCut = data.toString().split("\n");
      dataCut = dataCut.map(x => x.trim());
      sinRepes = new Set(dataCut);

      process.stdout.write(Array.from(sinRepes).join("\n"));
      process.stdout.write("\nprompt > ");
    });
    //process.stdout.write("\nprompt > ");
  },
  curl: function (arr) {
    let url = arr.splice(1).join("");

    request(url, function (error, response, body) {
      //console.error("error:", error);
      console.log("statusCode:", response.body.style);
      //console.log(response.statusCode)
      //console.log("body:", body.style);
    });
  },
};
