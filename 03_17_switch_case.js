let haftaninKacinciGunu = 3;

//art arda if kullanımı yerine switch kullanılabilir
// if( haftaninKacinciGunu === 1 ){
//     console.log("Pazartesi");
// } else if( haftaninKacinciGunu === 2 ){
//     console.log("Salı");
// } else if( haftaninKacinciGunu === 3 ){
//     console.log("Çarşamba");
// } else if( haftaninKacinciGunu === 4 ){
//     console.log("Perşembe");
// } else if( haftaninKacinciGunu === 5 ){
//     console.log("Cuma");
// } else if( haftaninKacinciGunu === 6 ){
//     console.log("Cumartesi");
// } else {
//     console.log("Pazar");
// }

switch( haftaninKacinciGunu ){
    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Salı");
        break;
    case 3:
        console.log("Çarşamba");
        break;
    case 4:
        console.log("Perşembe");
        break;
    case 5:
        console.log("Cuma");
        break;
    case 6:
        console.log("Cumartesi");
        break;
    case 7:
        console.log("Pazar");
        break;
    default:
        console.log("Geçersiz gün girilmiş"); 
}
console.log("Switch ' den çıkıldı.")

//hatalı kullanımı - break kullanmamak
// switch( haftaninKacinciGunu ){
//     case 1:console.log("Pazartesi");
//     case 2:console.log("Salı");
//     case 3:console.log("Çarşamba");
//     case 4:console.log("Perşembe");break;
//     case 5:console.log("Cuma");break;
//     case 6:console.log("Cumartesi");break;
//     case 7:console.log("Pazar");break;
//     default:console.log("Geçersiz gün girilmiş"); 
// }
