// Importera readline-modulen för att kunna läsa inmatning från terminalen
const readline = require('readline')

// Skapa ett interface för att hantera in- och utmatning via terminalen
const rl = readline.createInterface({
  input: process.stdin,   // standard inmatning (tangentbord)
  output: process.stdout  // standard utmatning (terminal)
});

// Funktion som översätter en text till rövarspråket
function rovarsprak(text) {
  // Ersätter varje konsonant med konsonanten + 'o' + konsonanten igen
  return text.replace(
    /[bcdfghjklmnpqrstvwxyz]/gi, // Hitta alla konsonanter (både stora och små)
    function(x) {
      return x + 'o' + x.toLowerCase(); // Byt ut mot rövarspråksversionen
    }
  );
}

// Ställ en fråga till användaren och ta emot svaret i variabeln 'namn'
rl.question("Vad heter du? ", function(namn) {
  // Skriv ut ett hälsningsmeddelande där namnet är översatt till rövarspråk
  console.log("Hej " + rovarsprak(namn) + "!");
  // Stäng ner readline-interfacet när vi är klara
  rl.close();
});
