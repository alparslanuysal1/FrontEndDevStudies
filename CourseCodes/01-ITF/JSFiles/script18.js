
let star = "";
let row = 18;

for(let i=1; i<=row; i++){ //satır
    
    for(let k=1; k<=i; k++){
        if(i=k){
            star = star + "*";
        }
        else{
            star = star + " ";
        }
        
       
    }    
    star = star + "\n";
}

console.log(star);