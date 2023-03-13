let star = ""
let row = 6
let columm = 10

for (let i=1; i<=row; i++){ //satır

    for (let k=1; k<=i; k++){//her sutunda satır sayısı kadar yıldız var.

        star=star+"*";
    }
    star=star+"\n";
}

console.log(star);

/*
let star = "";
let satır = 6;

for(let i=1; i<=satır; i++){ //satır
   
    for (let k=1; k<=i; k++){//her sutunda satır sayısı kadar yıldız var.
        
         star = star + "*";
    }
    star = star + "\n";
}

console.log(star);

// Yapmamız için verilen yıldızlardan oluşan şekilde; içteki döngüyü yani sutun döngüsünü satır sayısı kadar döndürüyor.
// "\n" programla dilinde enter demektir. (alt satıra geçirir*/