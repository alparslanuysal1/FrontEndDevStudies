/*
let star = "";
let satir = 9;
let sutun = 9;


for(let i=1; i<=satir; i++){
    
   
    for (let k=1; k<=sutun; k++){

        if (i<k) {
            star= star + " " 
        }
        else if (i%3==0 && k%2==0) {
            star= star + "*"   
        } else {
            star = star + k   
        }
        
    }
    star = star + "\n";
}

console.log(star);  */


 let element=""
 let satir=9;
 let sutun=9;

 for (let i=1; i<=satir; i++)   {

    for (let k=1; k<=sutun; k++)
        
        if (i<k){
       element=element+" ";
        }    
        else if (i%3==0 && k%2==0) {
            element=element+"*"    
    }
        else {
            element=element+k
    }
    element=element+"\n"
}
console.log(element);

// satırı "i" yazdırıyor.
// sütunu "k" yazdırıyor.
// element = element + k ise sayıların satır boyunca  ardaşık olarak artmasını sağlıyor.

        

