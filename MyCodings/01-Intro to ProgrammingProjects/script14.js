let toplam = 0
let i;
for (i=1; i<=3; i++) {
	const sayi= Number(prompt(i+". Sayıyı Giriniz."));
	toplam=toplam + sayi;
	console.log(toplam);
}

const ort=toplam/i-1;
console.log(ort);
alert("Sayıların Ortalaması: "+ort);