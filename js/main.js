//KM
var km = parseInt(prompt("Quanti km devi percorrere?"));
//AGE
var age = parseInt(prompt("Quanti anni hai?"));
//PRICES
var price_km = 0.21;
var total = (price_km * km);

//DISCOUNTS
var off_20 = ((total * 20) / 100);
var off_40 = ((total * 40) / 100);
if (age < 18) 
{
    total = total - off_20;
    console.log("Applicando lo sconto giovani , il tuo totale è di : " + total.toFixed(2) + "€");
}
else if (age > 65) 
{   
    total = total - off_40;
    console.log("Applicando lo sconto anziani , il tuo totale è di : " + total.toFixed(2) + "€");
}
else
{
    console.log("Il tuo totale è di : " + total.toFixed(2) + "€");
}