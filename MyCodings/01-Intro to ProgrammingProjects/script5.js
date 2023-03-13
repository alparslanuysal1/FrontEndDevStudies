const sayi = prompt ("Bir Sayı Giriniz");

if(sayi!=0) { // (!==) bu veri tipini de kontrol eder. Ama (!=) işareti ise veri tipini kontrol etmez. Sadece değer kontrolü yapar.
	console.log("sonuç: ");
	const sonuc = 50/sayi;
	console.log(sonuc);
}
else 
console.log(sonuc); //bu çalışmaz. Çünkü sonuc değişkeni if içinde var.
