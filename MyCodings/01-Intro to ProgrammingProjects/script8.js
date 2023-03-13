const boy= prompt ("Boyunuzu Giriniz (cm)");
const kilo= prompt("Kilonuzu Giriniz (kg)");

const vki=(kilo/(boy/100)**2).toFixed(2); //.toFixed(x) ondalıklı kısımda kaç satır yazılacağını belirler.

if (vki>=18.25 && vki<=25) {
	alert ("Vücut Kitle Endeksiniz: " +vki+" İdeal Kilo Aralığındasınız");
}
else { 
	alert ("Vücut Kitle Endeksiniz: " +vki+" İdeal Kilo Aralığında Değilsiniz");
}
