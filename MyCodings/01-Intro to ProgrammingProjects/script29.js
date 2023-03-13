// Objeler

const notlar = {
    vize:0,
    final:0,
    ort:0,
}

notlar.vize = Number(prompt("Vize notunuzu Giriniz"));
notlar.final = Number(prompt("Final notunuzu Giriniz"));
notlar.ort = (notlar.vize + notlar.final)/2;
console.log(notlar);