//verileri bir arada tutan yapılara array - dizi denir.

let arabaMarka1="Mercedes";
let arabaMarka2="Audi";
let arabaMarka3="BMW";

let arabaMarkalari =["Mercedes","Audi","BMW"];
console.log(arabaMarkalari);
console.log(arabaMarkalari[0]);
console.log(arabaMarkalari[3]);//undefined dizi 3 elemanlı ve indeksi maksimum 2 
arabaMarkalari[3] ="Honda";//ekleme
arabaMarkalari[4] ="Citroen";
arabaMarkalari[2] ="Peugeot";//değiştirme

arabaMarkalari[20] ="Suzuki";// araba dizisi: Mercedes,Audi,Peugeot,Honda,Citroen,,,,,,,,,,,,,,,,Suzuki
console.log(arabaMarkalari);// ["Mercedes", "Audi", "Peugeot", "Honda", "Citroen", empty × 15, "Suzuki"]
console.log(arabaMarkalari[8]); //undefined 
console.log(arabaMarkalari.length);//21

//en büyük indeks, dizi eleman sayısının bir eksiidir.
//dizi eleman sayısı 20 ise en büyük index 19'dur.

console.log("araba dizisi: " + arabaMarkalari.toString());

for(let i= 0; i<arabaMarkalari.length; i++) {
    console.log(arabaMarkalari[i]);
}

console.log("************************");
for(let oankiDiziElemanı of arabaMarkalari){
    console.log(oankiDiziElemanı);
}

let yenidDizi = [1, "Ad", true];
for(let oankiDiziElemanı of yenidDizi){
    console.log(oankiDiziElemanı);
}

