// variabler du skal bruge i din kode...
const A = 10;
const B = 30;
const C = "30";
const D = 10;
const E = 40;

// Opgave 1: skriv et expression der viser true når A er lig med B eller A er lig med D.

if (A == B || A == D) {
  console.log("statement1 true!");
}

//opgave 2: skrive en If then statement der bliver TRUE når  A er større end B og A er mindre end E.

if (A > B && A < E) {
  console.log("statement2 true!");
} else console.log("statement1 false!");

//opgave 3: Skriv en If then statement med  && og  || der kun er sand når alle expressions er sande.

if ((A == B && A == D) || A == E) {
  console.log("statement3 true!");
} else console.log("statement2 false!");

//opgave 4: Skriv en If then statement der kan finde ud af om F er "undefined" eller har en værdi, ved at bruge !.

if (!F) {
  console.log("statement4 true!");
} else console.log("statement3 false!");
