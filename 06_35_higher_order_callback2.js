//fonksiyonlar bir objedir ve değişkene atanabilir, bir fonksiyona parametre olarak atanabilir
let myDizi = [1, 2, 3];

/*// const diziyiKopyalaveIkiIleCarp = function (dizi) {
//     let geciciDizi = [];
//     for (let i = 0; i <dizi.length; i++){
//         geciciDizi[i] = dizi[i] * 2; 
//     }
//     // return geciciDizi;
//     console.log(geciciDizi);
// }

// const diziyiKopyalaveIkiIleBol = function (dizi) {
//     let geciciDizi = [];
//     for (let i = 0; i <dizi.length; i++){
//         geciciDizi[i] = dizi[i] / 2; 
//     }
//     // return geciciDizi;
//     console.log(geciciDizi);
// }

// const diziyiKopyalaveUcEkle = function (dizi) {
//     let geciciDizi = [];
//     for (let i = 0; i <dizi.length; i++){
//         geciciDizi[i] = dizi[i] + 3; 
//     }
//     // return geciciDizi;
//     console.log(geciciDizi);
// }

// console.log(myDizi);
// diziyiKopyalaveIkiIleCarp(myDizi);
// diziyiKopyalaveIkiIleBol(myDizi);
// diziyiKopyalaveUcEkle(myDizi);*/
//--------
//first class function
const ikiIleCarp = function (sayi) {
    return sayi * 2;
}

const ikiIleBol = function (sayi) {
    return sayi / 2;
}

const ucEkle = function (sayi) {
    return sayi + 3;
}
//--------
const diziIslemleri = function (dizi,islem) { //islem fonksiyon parametresi içn () koymadık çünkü burda referans verdik () bu eklendiğinde burda çalıştır demek
    let geciciDizi = [];
    for (let i = 0; i <dizi.length; i++){
        geciciDizi[i] = islem(dizi[i]); 
    }
    console.log(geciciDizi);
}
//higher order function:  parametre olarak fonksiyon alan ve/veya  
//return olarak fonksiyon döndüren fonksiyonlardır.
//diziIslemleri higher order fonksiyondur
//callback fonksiyon higher order fonksiyonda parametre olarak geçilen fonksiyondur
//ikiIleCarp, ucEkle, ikiIleBol callback fonksiyonlardır.
// direkt çağrılmadılar --ikilecarp(5) gibi değil -- ne zaman çağrılacağına diziIslemleri karar verdi diziIslemleri nin içinde çağrılacak ve çağrıldığı yerde geriye bir değer döndürüyor
diziIslemleri(myDizi,ikiIleCarp);//parametre olarak fonksiyon geçme
diziIslemleri(myDizi,ikiIleBol);
diziIslemleri(myDizi,ucEkle);
console.log(myDizi);
//senkron kodlar yukarıdan aşağı tetikleniyor ve ifadenin işlem süresinin bitmesi bekleniyor asenkron'da işlem arka planda çalışmaya devam edip kodlar akmaya devam ediyor ve o ifadenin arka planda işi bittiğinde sonucu getiriyor.

//---------------------

function adimiSoyle(ad, soyad) {
    console.log( "Merhaba " + ad + " " + soyad);
}

adimiSoyle('ad', 'soyad');

// function adimiBagir(ad, soyad) {
//     const mesaj = "MERHABA "+ ad.toUpperCase() + " " + soyad.toUpperCase();
//     console.log(mesaj);
// }

// adimiBagir('ad', 'soyad');

function adimiBagir(ad, soyad, callback) {
    const mesaj = "MERHABA "+ ad.toUpperCase() + " " + soyad.toUpperCase();
    callback(mesaj);
}

adimiBagir('ad', 'soyad', mesajGoster);
adimiBagir('ad', 'soyad', function (msj){ //adimiBagir higher order fonksiyon,function (msj){console.log(msj);  bu kısım ise callback geri çağıran fonksiyon oldu.
 
    console.log(msj);
});

// function mesajGoster(mesaj) {
//     console.log(mesaj);
// }





