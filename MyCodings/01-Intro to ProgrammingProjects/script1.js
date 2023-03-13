console.log("Bu benim console mesajım.");

/* 
alert("Hoşgeldiniz.");
  Kullanıcıya bilgilendirmek için kullanılır.

confirm("Çıkmak istediğinizden emin misiniz?");
  Kullanıcıya soru sorar.

prompt("Adınızı giriniz.");
  Kullanıcıdan bilgi alır. 
*/


const isim = prompt("İsminizi Giriniz");
alert("Merhaba "+ isim);

let ad= "Ali";
// let ad ile declare (yani değişken_tanımlama, ram'de değişkene yer ayırma) yaptım. "Ali" ile ise assingn (yani değişken atama yada işlem) yaptım.
ad = "Veli"; 
// bu ifadeyi yukardaki let(ad); ifadesinden sonraya yazdırırsak alertle çıkarılan pop-up ta Veli çıkar. Çünkü bir değişkenin , içerisinde aynı anda bir değişken taşınır. Ali gider Veli gelir.

alert(ad); 
// alertle çıkarılan pop-up ta en son ad yerine ne_tanımladıysan onu yazardırır. ad değişkeni arar bulur getirir.

/*  alert("ad"); 
alertle çıkarılan pop-up ta ad yazar. string ifadeyi aynen metin olarak yazdırır.*/



const kdv = 1.18;
// Sabitler const keyword'u ile_tanımlanır.
console.log(kdv);
// Kdv sabitine yeni değer atayıp console de yazardırmaya çalıştım AMA HATA VERİR. Çünkü sabitler(yani constant variable ler) değişmezler. 

let salary;
let isOpen = true;

console.log(typeof(kdv));
console.log(typeof(ad));
console.log(typeof(isOpen));
console.log(typeof(salary));
console.log(typeof(x));
console.log(typeof(age));

//console.log(typeof(x)); ile console veri tipini yazdırabiliriz.