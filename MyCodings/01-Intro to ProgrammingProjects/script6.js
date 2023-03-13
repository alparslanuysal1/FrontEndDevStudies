const sayi1 = Number(prompt("1. Sayıyı Giriniz"));
const sayi2 = Number(prompt("2. Sayıyı Giriniz"));
const sayi3 = Number(prompt("3. Sayıyı Giriniz"));

const ort = (sayi1+sayi2+sayi3)/3;
if (ort>sayi1){
		alert("KAR, ortalama: " +ort);
}
else { 
	alert("ZARAR, Ortalama: "+ort)
}