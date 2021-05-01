//truthy falsey
//FALSE, 0, "", null, undefined, NaN Falsey diğer hepsi truthy

let yas = 32;
yas = 0;// sıfır değeri false kabul ediliyor

if(yas > 20){ //örnekteki 32 değeri için true döner, 0 değeri atanınca false
    console.log("bu true ifade");
} else {
    console.log("bu false ifade");
}

if(true){//direkt true ifade döner
    console.log("bu true ifade");
} else {
    console.log("bu false ifade");
}

if(false){ //false
    console.log("bu true ifade");
} else {
    console.log("bu false ifade");
}
//----------

let isim = "Ad"; //içinde değer var true ifade dönecek
isim = ""; //false 
isim = null; //false
isim = undefined; //false

if(isim){
    console.log("bu true ifade");
} else {
    console.log("bu false ifade");
}

//----------
let dogumYili = 1988; //true
dogumYili = "Ad" //true

if(dogumYili){
    console.log("bu true ifade");
} else {
    console.log("bu false ifade");
}
//----------
let dogumYili2 = 1988; //true
dogumYili2 = "Ad" //true

if(dogumYili2 + 99){ //string ifadeye toplamada birleştirme yaptığı için true döner, çıktı //Ad99
    console.log("bu true ifade");
} else {
    console.log("bu false ifade");
}

if(dogumYili2 * 99){ //false (toplama dışındaki işlemler matematiksel işlem olarak algılanır)"Ad" olarak değer verilen dogumYili değişkeni number veri tipinde değil
    console.log("bu true ifade");
} else {
    console.log("bu false ifade");
}


