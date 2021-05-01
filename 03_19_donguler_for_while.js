//for döngüsü
//for(ilk atama; dogru_calistirma_sarti; her_calisma_sonrasi_ne_olacak)
//tekrar sayısı belli olma durumu

for(let i = 0; i < 20; i++)
console.log("Ad");

for(let i = 0; i < 20; i++){
    console.log("Ad");
    console.log("Soyad");
}

// //sonsuz döngüye sebep olur
// for(let i = 0; i < 20;){ //arttırma ifadesini kullanmayınca i değeri 0 da kaldı ve her kontrolde 20 den küçük olduğu için ekrana yazmaya devam eder.
//     console.log("Ad"); 
// }

for(let i = 0, j=0; (i+j) < 20; i=i+5, j=j+2) {
    console.log("Döngü çalıştı");
    console.log("i değeri:"+i+" j değeri:"+j);

}

//sonsuz döngü oluşturulur
// for(; ;){ //herhangi bir kontrol vs olmadığı için doğru kabul edilip sonsuz döngüye girecektir

// }

//hata oluşturabilecek durumlar
//----
for (let i = 0; i < 5; i++); {//; den dolayı 1 kere Merhaba çıktısı görülür.
    console.log("Merhaba");
}
//----------
//tek bir işlem satırı varsa süslü parantez kullanımına gerek yok ama 1'den fazla satır varsa kullanılmalı
for (let i = 0; i < 5; i++)
    console.log("Merhaba");

for (let i = 0; i < 5; i++) {
      console.log("Merhaba");
      console.log("Merhaba");
}
//değişken kapsamı i değişkeni for döngüsü içinde yaşar farklı for için aynı i değişken ismi bu yüzden kullanılabiliyor

for (let i = 0; i < 5; i++) {
    console.log("Merhaba " +i);
}
// console.log("Merhaba " +i); //for içinde tanımlanan i değişkeni for kapsamı dışında(öncesinde veya sonrasında) kullanılamaz

//dışardan bir değişken de kullanılabilir
let j = 0;
for (let j = 0; j < 5; j++) {
    console.log("Merhaba " +j);
}
console.log("Merhaba " +j); //Merhaba 5 de çıktı olarak görünecek 


