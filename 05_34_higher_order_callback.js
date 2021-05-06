let person = {
    ad: 'Ad',
    yas: 32,
    evliMi: false,
};

console.log(person.ad);
console.log(typeof person);
console.log(person instanceof Object);

console.log("------------------");

let renkler = ['mor'];
console.log(renkler[0]);
console.log(typeof renkler);
console.log(renkler instanceof Object);
console.log(renkler instanceof Array);
console.log(renkler instanceof Function);

console.log("----------------");

const fonksiyon = function (){
    console.log("merhaba dünya");
}
console.log(fonksiyon);
console.log(fonksiyon.toString());
fonksiyon();
console.log(typeof fonksiyon);
console.log(fonksiyon instanceof Function);
console.log(fonksiyon instanceof Array);
console.log(fonksiyon instanceof Object);

// fonksiyon.test = "deneme"; // fonksiyon da bir obje olduğu için böyle bir atama yapabildik
// console.log(fonksiyon.test);

console.log("----------------");

let sayi = 5;
const fonk = function (sayi){
    sayi = sayi * 2;
    return sayi;
}
fonk();
console.log(fonk()); //NaN
console.log(fonk(sayi));
console.log(sayi);

console.log("---------------");

let myDizi = [1, 2, 3];
// const diziElemanlariniIkiyleCarp  = function (dizi){
//     for (let i = 0; i < dizi.length; i++){
//         dizi[i] = dizi[i] * 2;
//     }
//     return dizi;

const diziElemanlariniIkiyleCarp  = function (dizi){
    let geciciDizi = []; //kaynak dizinin içeriğini bozmamak için
    for (let i = 0; i < dizi.length; i++){
        geciciDizi[i] = dizi[i] * 2;
    }
    return geciciDizi;

}
console.log("kopya dizi "+ diziElemanlariniIkiyleCarp(myDizi));
console.log("kaynak dizi "+ myDizi); //geçici dizi oluşmadan önce içeriği 2,4,6 olarak değişmişti

