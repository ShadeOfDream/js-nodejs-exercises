let sayilar = [1, 2, 3, 4, 5, 6];

for (let i = 0; i <sayilar.length; i++) {
    console.log(sayilar[i]);   
}
console.log("*****************");

for(let item of sayilar) {
    console.log(item);
}
console.log("*****************");

//foreach hiher order fonksiyonlardandır. ve parametre olarak da bir callback fonksiyonu aldı
// sayilar.forEach(function(sayi,index){ //iki parametre geriye döndürüyor
//     console.log(sayi,index);
// });

sayilar.forEach(ikiParametreAlanFonksiyon);

function ikiParametreAlanFonksiyon(sayi, index) {
    console.log(sayi,index);
}

//-------------------
diziyiYazdir(sayilar, function(deger, index){
    console.log("değer: "+ deger + " index : " + index);
})
/*Kendi foreach fonksiyonumuz */
function diziyiYazdir(dizi,callback) {
    for(let i = 0; i <dizi.length; i++){
        // console.log(dizi[i],i);
        callback(dizi[i],i);
    }
}