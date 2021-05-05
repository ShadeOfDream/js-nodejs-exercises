let isimler = ["a", "b", "c"];

console.log(isimler);
console.log(isimler.toString());
console.log(isimler.join(" | ")); // seperator değiştirme

let diziElemanSayisi = isimler.push("d");//dizinin sonuna eleman ekleme ve yeni dizi boyutunu değişken ile görebilme
console.log(isimler.toString() + " dizinin eleman sayısı: " + diziElemanSayisi);

let dizidenCikarilanEleman = isimler.pop();//dizinin sonundan eleman çıkarma değişken ile çıkarılan elemanı söyleme
console.log(isimler.toString() + " çıkarılan eleman : " + dizidenCikarilanEleman);

isimler.shift();//dizinin başından eleman çıkarma- ilk elemanı çıkarır
console.log(isimler.toString());

isimler.unshift("a"); //dizinin başına eleman ekleme
console.log(isimler.toString());

delete isimler[1];//eleman silme
console.log(isimler.toString() + " " + isimler[1]);

let sayilar = [1, 2, 3, 4, 5, 6, 7, 8];

sayilar.splice(8, 0, 9, 10);//7 = başlanacak index sayısı 0 = silinecek eleman adedi, 9 ve 10 eklenecek değerler
console.log(sayilar.toString());

let silinenler = sayilar.splice(0,4, 15, 20, 25);//0. indeksten başla 4 eleman sil ve başa(0. indeksten başla dediğimiz için) 15, 20, 25 i ekle  -- silinenleri de bir diziye atıp döndürüyor
console.log(sayilar.toString());
console.log(silinenler);

let tekSayilar = [1, 3, 5];
let ciftSayilar = [2, 4, 6];

let sayilarim = tekSayilar.concat(ciftSayilar);
console.log(sayilarim.toString());

let yeniDizi = sayilarim.slice(2, 4); //2.indeksten 4.indekse kadar değerleri al yeni bir dizi oluştur
console.log(yeniDizi.toString() + "     " + sayilarim.toString());

let yeniDizi2 = sayilarim.slice(0, 4);
console.log(yeniDizi2.toString());
