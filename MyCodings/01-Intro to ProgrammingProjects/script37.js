/* Kendisine parameter olarak gönderilen iki diziyi karşılaştırıp eşit olup olmadığını tespit eden fonksiyonu yazınız.
Önce fonksiyonun eleman sayılarını control etsin, sonra da elemanlarını… */


function dizilerEsitmi(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for (let i=0; i<arr1.length; i++){
        if(arr1[i]!==arr2[i]){
        return false;
        
        }
    }
    return true
}

const dizi1 = [12,13];
const dizi2 = [12,13];

if(dizilerEsitmi(dizi1,dizi2)){
        alert("Diziler Esit");
}
else {
        alert("Diziler Farkli");
}