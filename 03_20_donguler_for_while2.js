//while tekrar sayısı belli olmasa da bir şart vardır ve bu şart doğru olduğu sürece çalışmalı
let sayi=5;
while(sayi < 5){
    console.log("Merhaba");
}

//sonsuz döngüye sebep olur
// while(sayi<15){
//     console.log("Dünya");
// }

let sayi2=5;
while(sayi2 < 15){
    console.log("Merhaba");
    sayi2++;
}
//while ile yazılan for ile de yazılabilir tam tersi de geçerli 
//tekrar saysı belliyse for, şart var ama kaç kere tekrar edeceği bilinmiyorsa while tercih edilebilir
for(let j=5; j<15; j++){
    console.log("For döngüsü Merhaba");
}

//Do-while
let yas = 20;
do{
    console.log("Do-while merhaba");
} while (yas>30); //while ; ile bitiyor

do{//do kısmına yazılan işlemler while içinde bulunan şartın doğru olup olmadığına bakılmaksızın 1 kere çalıştırılır şart doğruysa döngü devam eder
    console.log("Do-while merhaba");
    yas++;
} while (yas<30);

//menü gösterme sayıları toplamak için 1 e bas, çıkarmak için  2 ye bas vb. gibi bir durumda
//kullanıcının girdiği sayıya bakmaksızın menünün gösterilmesi, do-while yapısına örnek gösterilebilir

//break(döngüyü kırma,bitirme), continue(devam et), return 

for(let i=0; i< 50; i++){
    if(i == 12){
        break;
    }
    console.log("Break kullanımı");
}

for(let i=10; i< 30; i++){
    if(i == 15){ //i nin 15 olduğu durumda alttaki kodları atla döngüye devam et
        continue;
    }
    console.log("Continue kullanımı" + i);
}

//for içinde return kullanımı sadece fonksiyon içindeyse olur
//aksi takdirde illegal return statement hatası alınır. 
// for(let i=0; i< 10; i++){
//     if(i == 5){
//         return;
//     }
//     console.log("Return kullanımı" + i);
// }
//shift alt f kod düzenleme