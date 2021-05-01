let a = 10, b = 5, c = 0;
if(a > b){
    c = a + b;
} else {
    c = b - a;
}
console.log("c değeri: " + c);

//ternary operatörü (kısa if operatörü) if ? , else :
c = (a > b) ? (a + b) : (b - a);
console.log("c'nin yeni değeri: " + c);

