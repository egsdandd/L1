const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Vad heter du? ", function(namn) {
  console.log("Hej " + namn + "!");
  rl.close();
});
