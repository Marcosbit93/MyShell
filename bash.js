const fs = require("fs");
const commands = require("./commands");

// Un prompt como output
process.stdout.write("prompt > ");

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
//console.log(process.argv[1]);

process.stdin.on("data", function (data) {
  let cmd = data.toString().split(" ");
  let str = "";
  if (cmd.length === 1) {
    str = cmd.join("");
    str = str.substring(0, str.length - 1);
    cmd = Array.of(str);
  }
  //console.log(cmd);
  if (cmd[0] === "pwd") commands.pwd();
  if (cmd[0] === "date") commands.date();
  if (cmd[0] === "ls") commands.ls(cmd);
  if (cmd[0] === "echo") commands.echo(cmd);
  if (cmd[0] === "cat") commands.cat(cmd);
  if (cmd[0] === "head") commands.head(cmd);
  if (cmd[0] === "tail") commands.tail(cmd);
  if (cmd[0] === "sort") commands.sort(cmd);
  if (cmd[0] === "tail") commands.tail(cmd);
  if (cmd[0] === "wc") commands.wc(cmd);
  if (cmd[0] === "uniq") commands.uniq(cmd);
  if (cmd[0] === "curl") commands.curl(cmd);
  process.stdout.write("\nprompt > ");
});
