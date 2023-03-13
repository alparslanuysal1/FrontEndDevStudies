const tarihSaat= new Date();

console.log(tarihSaat.getHours());

if (6<=tarihSaat && tarihSaat<11) {
	console.log("Günaydın");
	alert("Günaydın");
}
else if (11<=tarihSaat&& tarihSaat<17){
	console.log("İyi Günler");
	alert("İyi Günler");
}
else if (17<=tarihSaat&& tarihSaat<21) {
	console.log("İyi Akşamlar");
	alert("İyi Akşamlar");
}

else { 
	console.log("İyi Geceler");
	alert("İyi Geceler");

}	
