// Eleman sayıları eşit iki dizi içindeki karşılıklı elemanları toplayıp yeni bir diziye aktaran programı yazpınız.

const sayilar1 = [12,56,14,67,89,33,22];
const sayilar2 = [11,52,45,87,19,63,78];
let sayilarYeni = []
let toplam=0
for (let i=0; i<sayilar1.length; i++){
    
    sayilarYeni[i]=sayilar1[i]+sayilar2[i];
}
console.log(sayilarYeni)