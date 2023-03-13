const maas= prompt("Maaşınınızı Giriniz");


if (1000<=maas && maas<2000) {
		const yeniMaas= maas*1.3;
	alert("Yeni Maaşınız: "+yeniMaas);
	console.log("Yeni Maaşınız: "+yeniMaas)
}

else if (2000<=maas&& maas<4000) {
	const yeniMaas= maas*1.15;
	console.log("Yeni Maaşınız: "+yeniMaas)
}

else if (4000<=maas) {
	const yeniMaas= maas*1.05;
	console.log("Yeni Maaşınız: "+yeniMaas)
}

else {
	alert("Yanlış Maaş Bilgisi Girdiniz")
	console.log("Yeni Maaşınız: "+yeniMaas)
}