let star = "";
let row = 6;

for(let i=1; i<=row; i++){    //satır

    for (let k=1; k<row+i; k++){   //her sutunda satır sayısı kadar yıldız var.
      if (i+k>row) {
         star = star + " *";
      }
      else {
        star = star + "  ";
        }
        
    }
    star = star + "\n";
}

console.log(star);