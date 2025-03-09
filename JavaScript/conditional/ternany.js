//!  ************  TERNARY OPERATOR ************
// Şarta bağlı durumlar yazmak için başka ve daha kısa bir yöntem de ternary operator
// ES6 ile gelen bir özellik 

//ÖRNEK 1: Askerlik örneği if yapısı ile
// let yas=19


// console.log(typeof(h))

// if (yas>18)
//     {console.log("Askerlik yapabilir")}
// else{
//     console.log("Askerlik yapamaz")
// }

// // Ternary ile örnek1

// (yas>18) ? console.log("Askerlik yapabilir") : console.log("Askerlik yapamaz")

const age=19
const health=true
const gender="erkek"

if (age>18 && health==true && gender=="erkek"){
    console.log("askerlik yapabilir")
}
else{
    console.log("askerlik yapamaz")
}

let mesaj = (age>18 && health==true && gender=="erkek") ? "tamam sen git askere": "hayır asla gidemezsin";

console.log(mesaj);

(age>18 && health==true && gender=="erkek") ? console.log("tamam sen git askere") : console.log("hayır asla gidemezsin");

const sayi1=56;
const sayi2=23;

// toplamından çıkan sonuc 60dan büyükse sayıları çarp küçükse bölme yap

let sonuc=sayi1+sayi2

sonuc>60 ? console.log(sayi1*sayi2) : console.log(sayi1/sayi2)

let result= sonuc>60 ? sayi1*sayi2 : sayi1/sayi2
console.log(result)
// grade 50den büyükse geçti değilse kaldı

let grade=40;

(grade>50) ? console.log("Geçtiniz") : console.log("kaldınız");

// else için bir değerimiz yoksa "" veya null verip kurtulabiliriz
grade>50 ? console.log("GEçtiniz") : null



// ÖRNEK SORULAR
//1.Bir sayı 50 ile 100 arasında mı?  Evetse 50 ile 100 arasında değilse, bu aralıkta değil yazdıralım

let num=101;
(num>=50 && num<=100 ) ? console.log("50 ile 100 arasında") : console.log("Bu aralıkta değil")


//2.Bir sayı hem 3'e hem 5'e tam bölünüyor mu?


//3.Bir araba modeli hem elektrikli hem de 2020’den sonra mı üretilmiş?
let isElectric = true;
let productionYear = 2022;

//4.Bir kişi yetişkin mi ve yaşlı mı (yaş 18'den büyük ve 65’ten büyük)?
let age1 = 70;

//5.Bir sayı hem negatif hem tek mi?
let num1 = -3;

// 6.Bir sayı hem 4’e hem 6’ya tam bölünebiliyor mu?

// 7.Bir sayı 5’e bölünebiliyor mu ve 50’den büyük mü?

// 8.İki sayı toplamı 100’den büyük ve farkları 20’den küçük mü?

// 9.Bir sayı hem çift mi hem de 10’un katı mı?

// 10.Bir sayı 1000’den büyük mü ve 5’e tam bölünebiliyor mu?