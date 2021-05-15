const bitkiler = [
    {ad: 'çilek', tur: 'meyve'},
    {ad: 'muz', tur: 'meyve'},
    {ad: 'kiraz', tur: 'meyve'},
    {ad: 'ıspanak', tur: 'sebze'},
    {ad: 'kereviz', tur: 'sebze'},
];

//filter metodu kullanmadan önce
//meyveleri içeren yeni dizi
// function meyveleriBul() {
//     const geciciDizi = [];
//     for(let i = 0; i < bitkiler.length; i++) {
//         if(bitkiler[i].tur === 'meyve') {
//             geciciDizi.push(bitkiler[i]);
//         }
//     }
//     return geciciDizi;
// }

//sebzeleri içeren yeni dizi
// function sebzelerBul() {
//     const geciciDizi = [];
//     for(let i = 0; i < bitkiler.length; i++) {
//         if(bitkiler[i].tur === 'sebze') {
//             geciciDizi.push(bitkiler[i]);
//         }
//     }
//     return geciciDizi;
// }

// console.log(meyveleriBul());
// console.log(sebzelerBul());
//----------------------------------------------------------------

//filter metod
// const meyveler = bitkiler.filter(function (bitki) {
//     return bitki.tur === 'meyve';
// });

// const sebzeler = bitkiler.filter(function (bitki) {
//     return bitki.tur === 'sebze';
// });

// console.log(meyveler);
// console.log(sebzeler);

//kendi filter yapı
// function kendiFilterYapim(dizi, filtreSartlari){
//     const geciciDizi = [];
//     for(let i=0; i<dizi.length; i++){
//         const sonuc = filtreSartlari(dizi[i]);
//         if(sonuc){
//             geciciDizi.push(dizi[i]);
//         }
//     }
//     return geciciDizi;
// }

// function filtre(bitki){
//     return bitki.tur === 'meyve';
// }

// function filtre(bitki){
//     return bitki.tur === 'sebze';
// }

//const meyveler = kendiFilterYapim(bitkiler, filtre);
//alternatif - anonymous function
// const meyveler = kendiFilterYapim(bitkiler, function (bitki){
//     return bitki.tur === 'meyve';
// });
//alternatif - arrow function
// const meyveler = kendiFilterYapim(bitkiler, bitki=> bitki.tur === 'meyve');

// console.log(meyveler);
//------------------

function kendiFilterYapim(dizi, filtreSartlari){
    const geciciDizi = [];
    for(let i=0; i<dizi.length; i++){
        const sonuc = filtreSartlari(dizi[i], 'sebze');
        if(sonuc){
            geciciDizi.push(dizi[i]);
        }
    }
    return geciciDizi;
}


function filtre(bitki, sart){
    return bitki.tur === sart;
}

const meyveler = kendiFilterYapim(bitkiler, filtre);

console.log(meyveler);
