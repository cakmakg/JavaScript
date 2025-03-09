/*
if ( şart )
{ 
    şart durumu doğru ise bu blok çalıştırılır
}
else{
    şart durumu doğru değilse bu blok çalıştırılır.
}
*/

let sicaklik=60

if (sicaklik>50){
    console.log("yıkamaya başla")
}
else{
    console.log("ısıtmaya devam et")
}

// prompt kodu kullanıcıdan bilgi almayı sağlar
//! kullanıcıdan alınan her bilgi string olarak gelir.

// girilen sayı tek mi çift olduğunu yazan program

// let sayi=Number(prompt("Bir sayı giriniz:"))

// let kalan=sayi % 2;

// if (kalan===0){
//     console.log("Sayı çifttir.")
// }
// else{
//     console.log("Sayı tektir")
// }

//! ******* IF - ELSE IF - ELSE 
/* if ( şart1 )
{ 
    şart1 durumu doğru ise bu blok çalıştırılır
} 

else if (şart2 ){
    şart1 durumu doğru değil şart2 durumu doğru ise bu blok çalıştırılır
}

else{
    şart durumu doğru değilse bu blok çalıştırılır.
}
*/
// HESAP MAKİNASI
console.log("-------Hesap Makinası------------")

// 7 + 5= 12
// 7 - 5= 2
// 7 * 5 = 35
// 7 / 5 =1.

// const sayi1=+prompt("1.Sayıyı giriniz:");
// const islem=prompt(" Bir operator giriniz(+,-,*,/):");
// const sayi2=+prompt("2. sayıyı giriniz:");

// let sonuc;

// if (islem =="+"){
//      sonuc= sayi1+sayi2;
// } 
// else if(islem=="-"){
//     sonuc=sayi1-sayi2;
// }
// else if(islem=="*"){
//     sonuc=sayi1*sayi2;
// }
// else if(islem=="/"){
//     sonuc=sayi1/sayi2;
// }
// else{
//     console.log("Yanlış operator girdiniz");
// }

// console.log("SONUC:",sonuc);

// if (sonuc!=0){
//     console.log("Tebrikler bir sonuç buldunuz",sonuc)
// }

// 1.Kısayol
// if (sonuc){
//     console.log("Tebrikler bir sonuç buldunuz",sonuc)
// }

// short circuit
// &&  and || or
// && : hepsi doğru olmalı, hepsi True ise sonuncuyu alır

// sonuc && console.log("bir sonuc buldunuz")

let yas=16
let h="sağlıklı";

console.log(typeof(h))

if ((yas>18) && (h=="sağlıklı"))
    {console.log("Askerlik yapabilir")}
else{
    console.log("Askerlik yapamaz")
}
