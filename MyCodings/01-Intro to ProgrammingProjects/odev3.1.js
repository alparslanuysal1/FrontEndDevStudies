/*  Bir adada bir maymun yaşamaktadır ve muzla beslenmektedir. Hergün belli bir sayıda muz yediğinde hayatta kalmaktadır. Maymunu muzlar bitene kadar besleyen programı yazınız.


Adada şu anda 165 muz bulunmaktadır ve hergün sayısı 2 adet artmaktadır.

Maymunun hayatta kalabilmesi için günde en az 4 muz yemesi gerekmektedir.

Do-while döngüsü ile maymunu besleyin. Sonuçta maymunun kaç gün hayatta kaldığını ve ne kadar muz kaldığını bulun.

Döngünün her dönüşü 1 günü temsil etmektedir. Günlük yeterli muz varsa döngü dönmeye devam edecektir.  */ 


/*
let toplamMuz = 165
let day=1
let yenenMuz = 4

do { 



    day ++

 toplamMuz=toplamMuz+2 

 toplamMuz= toplamMuz-yenenMuz
    



    
} while (toplamMuz>=8);

// do while döngüsü yaptımız için şart sağlamasada son döngüye giricek, bu nedenle iki günlük muz koydum şarta..


console.log ("Kalan muz miktarı: " + (toplamMuz-yenenMuz));
console.log ("Maymununuz " + day++ + " gün hayatta kaldı.")
*/


let toplamMuz= 165
let day=1
let yenenMuz = 4

do {
    day++
    toplamMuz = toplamMuz - 2

}
while (toplamMuz>=2);
console.log (toplamMuz);
console.log(day)


