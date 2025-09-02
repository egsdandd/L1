// Importera readline-modulen för att kunna läsa inmatning från användaren via terminalen
const readline = require('readline');

// Skapa ett nytt interface för in- och utmatning (input/output)
const rl = readline.createInterface({
  input: process.stdin,   // standard inmatning (tangentbord)
  output: process.stdout  // standard utmatning (terminalen)
});

// Ställ en fråga till användaren och ta emot svaret i variabeln 'namn'
rl.question("Vad heter du? ", function(namn) {
  // Skriv ut ett hälsningsmeddelande som inkluderar det angivna namnet
  console.log("Hej " + namn + "!");
  // Stäng ner readline-interfacet när vi är klara
  rl.close();
});
