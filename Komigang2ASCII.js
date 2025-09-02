const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Vad heter du? ", function(namn) {
  let meddelande = " Välkommen, " + namn + "!";
  let ram = "*".repeat(meddelande.length);
  console.log(ram);
  console.log(meddelande);
  console.log(ram);
  rl.close();
});
