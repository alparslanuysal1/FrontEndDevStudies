//Diziler

const kurs1 = "HTML";
const kurs2 = "CSS";
const kurs3 = "Javascript";

const kurslar = ["HTML","CSS" ,"Javascript"]
// Dizinin elemanlari 0-1-2-3-4-5.... diye numaralanir.

console.log(kurslar);
console.log(typeof kurslar); /* Objedir */
console.log(kurslar[2]); /*Javascript */
console.log(kurslar[0].length); // HTML 4 uzunlugunda
console.log(kurslar.length); // 3 uzunlugunda

// ITERATION Bir dizinin elemanari arasinda gezinmek:
for(let i=0; i<kurslar.length; i++){
    console.log(kurslar[i]);
}