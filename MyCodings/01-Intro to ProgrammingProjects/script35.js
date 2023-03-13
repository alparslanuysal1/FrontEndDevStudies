//dizideki sayilarin kac tanesi genel ortalamadan kucuk ve kac tanesi genel ortalamadan buyuk?

const sayilar = [12,56,14,67,89,33,33];
let toplam=0


for (let i=0; i<sayilar.length; i++){
    toplam = toplam + sayilar[i];

}
const ortalama = toplam/sayilar.length;
let sayacBuyuk=0
let sayacKucuk=0

for (let i=0; i<sayilar.length; i++) {
    if(sayilar[i]<ortalama){
        sayacKucuk++;
    }
    //Asagidaki if yerine su yapilabilirdi: (sayacBuyuk = sayilar.length-sayacKucuk)
    if(sayilar[i]>ortalama){
        sayacBuyuk++;
    }
}

console.log(ortalama);
console.log("Ortalamadan Buyuk Sayilar(Tane): "+sayacBuyuk);
console.log("Ortalamadan Kucuk Sayilar(Tane): "+sayacKucuk);