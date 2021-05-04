////SORU4 Kendi adınızı ekrana 5 kere yazdıran uygulamayı tüm döngülerle yapınız.
//for - while - do while 

//for
// let ad = prompt("Adınızı giriniz:");

// for(let i=0; i<5; i++) {
//     console.log(ad);
// }
//------------------
//while
// let ad = prompt("Adınızı giriniz:");

//let i = 0;
// while(i<5) {
//     console.log(ad);
//     i++;
// }
//------------------
//do while
// let ad = prompt("Adınızı giriniz:");
// let i= 0;
// do{
//     console.log(ad);
//     i++;

// } while(i<5);

////SORU5 1’den 100’e kadar olan sayıların toplamını bulan uygulamayı yazınız.
// let toplam = ( 100 * (100 + 1)) / 2; //n (n+1)/2
// console.log(`1'den 100'e kadar olan sayıların toplamı : ${toplam}`);
//-----------------------
// let toplam =0;
// for (let i=1; i<=100; i++){
//     toplam = toplam + i;
//     console.log(toplam);
// }
// console.log(`1'den 100'e kadar olan sayıların toplamı : ${toplam}`);

////SORU6 1’den 10a kadar olan sayıları sıra ile ve aralarında virgül olacak şekilde yazan bir uygulamayı for döngüsü ile yazınız.
// for(let i = 1; i <=10; i++){
//     if(i !==10){
//     console.log(`${i},`);}
//     else {
//         console.log(`${i}`);}
// }

//----------------------------------------------------------------
// let sonuc = "";
// for(let i = 1; i <=10; i++){
//     if(i !==10){
//         sonuc = sonuc + i +",";
//     } else {
//         sonuc = sonuc + i;
//     }        
// }
// console.log(`${sonuc}`);

////Soru 7: Klavyeden girilen bir sayının faktöriyelini alan bir uygulama yazınız.
let sayi = parseInt(prompt("Bir sayı giriniz."));
let sonuc = 1;
for (let i = 1; i <=sayi; i++) {
    if(sayi == 0 ) {
        console.log(" 0! = 1 ' e eşittir.");
    } else {
        sonuc = sonuc *i;
    }
}
console.log(`Faktöriyel : ${sonuc}`);




