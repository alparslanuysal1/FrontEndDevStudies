// 1+2+3+4+5+6....   
    // sonuc = sonuc + i;

// 7-> 1/1+ 1/2 + 1/3 + 1/4 + 1/5 + 1/6 + 1/7
    // sonuc = sonuc + 1/i;

// 5-> 1/1! + 1/2! + 1/3! + 1/4! + 1/5!
    // sonuc = sonuc + 1/fakt(i);

function toplam(sayi) { 
let sonuc = 0;
    for (let i=1; sayi>=i; i++){
        sonuc = sonuc + 1/fakt(i);
    }
    return sonuc;    
}


function fakt(sayi){
    let carpim = 1
    for (let i=sayi; i>=1; i--)
        // i=1; i<=sayi; İ++ (alternatif kod)
    {
        carpim = carpim * i;
    }
    return carpim;

}

alert(toplam(5));