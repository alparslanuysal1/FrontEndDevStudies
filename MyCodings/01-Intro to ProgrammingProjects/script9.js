/*const yas = prompt("Yaşınızı Giriniz");
//const kalanYil=18-yas; Bu değişkeni buraya yazarsam program boyunca ram'de yer kaplayan bir değişken tamınlamış oluruz. Bunun yerine else kısmının süslü parantezlerinin içinde tanımla ve orada olsun bitsin.
if (yas>=18) {
	alert("Ehliyet Alabilirsiniz");
}
else { 
	alert("Ehliyetinizi "+(18-yas)+" yıl sonra alabilirsiniz");
}


const email = prompt("e-Posta Adresinizi Giriniz");
const sifre = prompt("Şifrenizi Giriniz");

*/ 
/* 
Kullanıcının girdiği email ve şifre bilgisinin doğru olup olmadığını kontrol edip mesaj veren programı yapınız
*/

const email = "kedi@gmail.com"
const sifre = "kedininpabucu"
/* 
normalde böyle alınmaz kullanıcının maili şifresi back-end den alınma yolları var
*/
const entermail = prompt("E-mail adresinizi giriniz.")
const entersifre = prompt("Şifrenizi giriniz.")

if (email==entermail && sifre==entersifre) {
    alert("E-mail adresinizin ve şifresiniz eşleşiyor.")
}
else(
    alert("E-mail adresinizin ve şifresiniz eşleşmiyor.")
)

// == (iki eşittir)le de çalışır. === (üç eşittir)in kullanılması önerilir.