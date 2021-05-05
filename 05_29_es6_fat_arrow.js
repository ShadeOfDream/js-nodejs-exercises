function selamVer() {
    console.log("merhaba");
}

selamVer();

const selamVerDegisken = function(){//değişkene fonksiyon ataması- fonksiyon isimsiz.
    console.log("merhaba selamVerDegisken");
}
// console.log(selamVerDegisken); //içeriğini yazdırır.
selamVerDegisken();


//es6

const fatArrow = () => { //function kelimesi yok , parametre listesi var 
    console.log("merhaba fatArrow");
}  

// const fatArrow = _ => { //fonksiyon parametre almıyorsa _ yazılabilir
//     console.log("merhaba fatArrow");
// }  

fatArrow();

function karesiniAl (sayi) {
    return sayi * sayi;
}

const karesiniAlDegisken = function (sayi) {
    return sayi * sayi;
}

console.log(karesiniAl(5));//parametreli fonksiyon atanmış değişken yazdırılırken parantez açılır - karesiniAl()
console.log(karesiniAlDegisken(7));

const fatArrowParametreli = (sayi) =>{
    return sayi * sayi;
}

console.log(fatArrowParametreli(6));

const fatArrowParametreliKisa = sayi =>{ //tek parametre varsa parantez kaldırılabilir.
    return sayi * sayi;
}

console.log(fatArrowParametreliKisa(9));

const fatArrowParametreliKisa2 = sayi => sayi * sayi; //Tek ifade olduğunda süslü parantezler kaldırılabilir ve return de kaldırılır.
console.log(fatArrowParametreliKisa2(10));

const sayilariTopla = (s1,s2) => s1 + s2;
console.log(sayilariTopla(5,7));

const sayilariTopla2 = (s1,s2) => {
    return s1 + s2;
}
console.log(sayilariTopla2(6,9));

const sayilariTopla3 = function (s1,s2){
    return s1 + s2;
}
console.log(sayilariTopla3(7,9));