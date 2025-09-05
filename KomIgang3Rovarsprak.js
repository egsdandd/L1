/**
 * @file Övning L1 i kurs 1DV610
 * @version 1.0.0
 * @author Dan-Håkan Davall, dd222mk@student.lnu.se
 */

// Importera readline-modulen för att kunna läsa och skriva till terminalen
import { createInterface } from 'readline';

// Skapa ett interface för att hantera in- och utmatning via terminalen
const inOut = createInterface({
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

// Funktion som gör första bokstaven i en sträng till stor bokstav
function capitalizeFirstLetter(string) {
  if (!string) return ""; // Hantera tom sträng
  return string.charAt(0).toUpperCase() + string.slice(1); // Versal + resten oförändrad
}

// Ställ en fråga till användaren och ta emot svaret i variabeln 'namn'
inOut.question("Vad heter du? ", function(namn) {
  const namnMedVersal = capitalizeFirstLetter(namn);            // Gör första bokstaven stor
  const rovarNamn = rovarsprak(namn);                           // Översätt till rövarspråk
  const rovarNamnMedVersal = capitalizeFirstLetter(rovarNamn);  // Gör första bokstaven stor även i rövarspråksnamnet

  // Skriv ut hälsningsmeddelanden med korrekt versal i början
  console.log("Hej " + namnMedVersal + "! - på rövarspråk blir det:");
  console.log("Hej " + rovarNamnMedVersal + "!");

  // Stänger ner interface efter att allt är klart
  inOut.close();
});

