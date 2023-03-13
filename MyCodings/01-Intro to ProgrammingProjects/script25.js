function fakt(sayi){
    let carpim = 1
    for (let i=sayi; i>=1; i--) {
        carpim = carpim * i;
    console.log(i);
    }
    return carpim

}

alert(fakt (5));
alert(fakt(10));