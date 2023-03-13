let star = "";
let row = 6;

for(let i=1; i<=row; i++){ //satır

    for (let k=1; k<=i; k++){//her sutunda satır sayısı kadar yıldız var.
        if (i===k) {
            star = star + "*" // satir ve sutun sayisi esit oldu[unda yildiz koyacak, yoksa bosluk koyacak]
        }
        else {
         star = star + " ";
        }
    }
    star = star + "\n";
}

console.log(star);