let isim = "Ad"; //GLOBAL SCOPE

selamVer();

function selamVer() {

    let yas = 30;//fonksiyon içinde tanımlı
    console.log("Merhaba " + isim + "yaş : " + yas);
}

// let isim = "Ad2";//hata - global alanda aynı isimle değişken var 
let yas = 40 ; //aynı isimle değişken var fakat farklı alanlarda biri global biri local alanda(local alanda olan fonksiyon içinde tanımlı)

console.log("Yaş: " + yas);// 

// favoriRenginiSoyle("Yeşil");
let favoriRenk = "Yeşil";
favoriRenginiSoyle(favoriRenk);

function favoriRenginiSoyle(renk){
    // let favoriRenk = "Sarı"; // let ile yeni bir değişken tanımı yapıldığında
    // console.log("Favori renk " + renk);//yeşil global den gelen
    // let favoriRenk = renk; 
    // console.log("Favori renk " + favoriRenk);//yeşil global den atanan
    let favoriRenk = "Sarı"; //shadowed
    console.log("Favori renk " + favoriRenk);//Sarı 
    //// let favoriRenk = "Sarı"; //bu satır yoksa 
    //console.log("Favori renk " + favoriRenk);//Yeşil globalden gelecek
    favoriRenk = "Sarı"; //shadowed //let eklemezsek globaldeki değişkenin değerini değiştirir ve fonksiyon dışındaki log da da Sarı değerini yazdırır.
    console.log("Favori renk " + favoriRenk);//Sar
}
console.log(favoriRenk); //yeşil