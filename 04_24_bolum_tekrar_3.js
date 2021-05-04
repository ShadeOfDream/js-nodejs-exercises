/*Soru 8:
Aşağıda tanımı verilen f(x,y) fonksiyonunu klavyeden girilen x ve y değerleri için hesaplayınız.
x>0, y<0 ise f(x,y) = 4x+2y+4
x>0, y=0 ise f(x,y) = 2x-y+3
x<0, y>0 ise f(x,y) = 3x+4y+3*/

// let x = parseInt(prompt("x değerini giriniz."));
// let y = parseInt(prompt("y değerini giriniz."));

// if(x>0 && y<0){
//     f = 4 * x + 2 * y + 4;
//     console.log(`Sonuç : ${f}`);
// } else if(x>0 && y==0){
//     f = 2 * x - y + 3;
//     console.log(`Sonuç : ${f}`);
// }else if(x<0 && y>0){
//     f = 3 * x + 4 * y + 3;
//     console.log(`Sonuç : ${f}`);
// }else{
//     console.log("Fonksiyon tanımı dışında değer girilmiştir");
// }

//Soru 9:  100lük sistemde verilen notları harfli sistemde gösteren bir uygulama yazınız.

// let not = parseInt(prompt("100'lük sistemde not değerini giriniz."));

// if(not >= 90 && not <= 100 ){
//     console.log("Notunuz: " + not + " Başarı Puanı: 90-100, Harf notu: AA, Katsayı: 4.00, Başarı Derecesi: Pekiyi ");
// }else if (not >= 85 && not <= 89){
//     console.log("Notunuz: " + not + " Başarı Puanı: 85-89, Harf notu : BA, Katsayı: 3.50, Başarı Derecesi: İyi-Pekiyi");
// } else if (not >= 80 && not <= 84){
//     console.log("Notunuz: " + not + " Başarı Puanı: 80-84, Harf notu : BB, Katsayı: 3.25, Başarı Derecesi: İyi");
// }else if (not >= 70 && not <= 79){
//     console.log("Notunuz: " + not + " Başarı Puanı: 70-79, Harf notu : CB, Katsayı: 3.00, Başarı Derecesi: Orta-İyi");
// }else if (not >= 60 && not <= 69){
//     console.log("Notunuz: " + not + " Başarı Puanı: 60-69, Harf notu : CC, Katsayı: 2.50, Başarı Derecesi: Orta");
// }else if (not >= 55 && not <= 59){
//     console.log("Notunuz: " + not + " Başarı Puanı: 55-59, Harf notu : DC, Katsayı: 2.25, Başarı Derecesi: Geçer-Orta");
// }else if (not >= 50 && not <= 54){
//     console.log("Notunuz: " + not + " Başarı Puanı: 50-54, Harf notu : DD, Katsayı: 2.00, Başarı Derecesi: Geçer");
// }else if (not >= 40 && not <= 49){
//     console.log("Notunuz: " + not + " Başarı Puanı: 40-49, Harf notu : FD, Katsayı: 1.50, Başarı Derecesi: Geçmez");
// }else if (not <= 39){
//     console.log("Notunuz: " + not + " Başarı Puanı: 39 ve aşağısı, Harf notu : FF, Katsayı: 0, Başarı Derecesi: Geçmez");
// }

//Soru 10: Çarpım tablosunu oluşturan bir uygulama yazınız.

for (let i = 0; i <=9; i++) {
    for(let j = 0; j <= 9; j++) {
        if(j== 0){
            console.log("-----------");
        }
        console.log(`${i} x ${j} = ${i * j}`);
        
    }
}