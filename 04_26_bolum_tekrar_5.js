/*SORU 14:
Kullanıcıdan aldığınız integer değere kadar olan tüm asal sayıları yazdıran programı yazınız. 10 için ekranda 2,3,5,7 değerleri olmalıdır.*/

// let girilenSayi = parseInt(prompt("Bir sayı giriniz."));
// let gosterilecekMetin = "";

// for (let i = 2; i <= girilenSayi; i++) {
//     let asalSayiMi = true;
//     for (let j = 2; j <i; j++) {
//         if(i % j == 0) {
//             asalSayiMi = false;
//             break;
//         }
//     }
//     if(asalSayiMi == true) {
//         gosterilecekMetin = gosterilecekMetin + i + " ";
//     }
// }
// console.log(gosterilecekMetin);


/*
SORU 15:
1 + 2 + 4 + 7 + 11 + 16 + 20 + 23  + 25 + 26 + 28 + 31 + 35 = 229 ? işleminin sonucunu bulan js kodunu yazınız.*/

let artisMiktari = 0;
let artiyorMu = true;
let toplam = 0;
let gosterilecekMetin = "";

for(let i = 1; i <=35; i= i + artisMiktari){

    if(i!=35){
        toplam = toplam + i;
        gosterilecekMetin = gosterilecekMetin + i + " + ";
    }else{
        toplam = toplam + i;
        gosterilecekMetin = gosterilecekMetin + i + " = " + toplam;
    }

    if(artisMiktari <= 4 && artiyorMu == true){
        artisMiktari++;
        if(artisMiktari ==5){
            artiyorMu = false;
            continue;
        }
    }else {
        artisMiktari--;
        if(artisMiktari ==1){
            artiyorMu = true;
            continue;
        }
    }
}
console.log(gosterilecekMetin);
