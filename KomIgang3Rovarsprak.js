const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rovarsprak(text) {
  return text.replace(/[bcdfghjklmnpqrstvwxyz]/gi, function(x) {
    return x + 'o' + x.toLowerCase();
  });
}

rl.question("Vad heter du? ", function(namn) {
  console.log("Hej " + rovarsprak(namn) + "!");
  rl.close();
});