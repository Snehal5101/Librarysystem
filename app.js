let novel=["https://cdn.penguin.com.au/covers/original/9780141332499.jpg","https://i.harperapps.com/covers/9780062024329/y648.jpg","http://ecx.images-amazon.com/images/I/514GAjvGPTL._SY445_QL70_.jpg","https://i.ebayimg.com/images/g/hH0AAOSwhzZeoT58/s-l400.jpg"]

document.getElementById("novel1").src =novel[0];
document.getElementById("novel2").src =novel[1];
document.getElementById("novel3").src =novel[2];
document.getElementById("novel4").src =novel[3];

let history=["https://images-na.ssl-images-amazon.com/images/I/91mq3UEpjGL.jpg","https://images-na.ssl-images-amazon.com/images/I/A1w61w8szYL.jpg","https://dynamic.indigoimages.ca/books/0743226720.jpg?altimages=false&scaleup=true&width=614&maxheight=614&quality=85&lang=en","https://i.pinimg.com/originals/af/0b/6f/af0b6fb2bdfc383c5b902cc894f5e902.jpg"]

document.getElementById("history1").src =history[0];
document.getElementById("history2").src =history[1];
document.getElementById("history3").src =history[2];
document.getElementById("history4").src =history[3];

let drama=["https://images-na.ssl-images-amazon.com/images/I/51KkQkk-I2L.jpg","https://images-eu.ssl-images-amazon.com/images/I/51bBWT7S1ZL.jpg","https://images-na.ssl-images-amazon.com/images/I/61N80QycP9L.jpg","https://images-na.ssl-images-amazon.com/images/I/51ksYIoKQTL.jpg"]

document.getElementById("drama1").src =drama[0];
document.getElementById("drama2").src =drama[1];
document.getElementById("drama3").src =drama[2];
document.getElementById("drama4").src =drama[3];

let poetry=["https://images-eu.ssl-images-amazon.com/images/I/51TshQlHkhL.jpg","https://images-na.ssl-images-amazon.com/images/I/41EBV2HnNTL.jpg","https://images-eu.ssl-images-amazon.com/images/I/51PYNq1aNoL.jpg","https://images-na.ssl-images-amazon.com/images/I/51QveJiTX5L.jpg"]

document.getElementById("poetry1").src =poetry[0];
document.getElementById("poetry2").src =poetry[1];
document.getElementById("poetry3").src =poetry[2];
document.getElementById("poetry4").src =poetry[3];

let myth=["https://images-eu.ssl-images-amazon.com/images/I/51C7IGsOYHL.jpg","https://images-na.ssl-images-amazon.com/images/I/51BsIoiN3vL.jpg","https://images-eu.ssl-images-amazon.com/images/I/51tmOOLWEhL.jpg","https://images-eu.ssl-images-amazon.com/images/I/511k5KFlFpL.jpg"]

document.getElementById("myth1").src =myth[0];
document.getElementById("myth2").src =myth[1];
document.getElementById("myth3").src =myth[2];
document.getElementById("myth4").src =myth[3];

let romance=["https://images-na.ssl-images-amazon.com/images/I/512zXTPu2xL.jpg","https://images-na.ssl-images-amazon.com/images/I/516s3u9PaNL.jpg","https://images-eu.ssl-images-amazon.com/images/I/513MKgcfGZL.jpg","https://images-na.ssl-images-amazon.com/images/I/51qLrgUXHTL.jpg"]

document.getElementById("romance1").src =romance[0];
document.getElementById("romance2").src =romance[1];
document.getElementById("romance3").src =romance[2];
document.getElementById("romance4").src =romance[3];

let biography=["https://images-na.ssl-images-amazon.com/images/I/514vK2U0tRL.jpg","https://images-eu.ssl-images-amazon.com/images/I/51G0MGBGaoL.jpg","https://images-eu.ssl-images-amazon.com/images/I/51niMh0zmML.jpg","https://images-eu.ssl-images-amazon.com/images/I/41sYhyuhxDL.jpg"]

document.getElementById("biography1").src =biography[0];
document.getElementById("biography2").src =biography[1];
document.getElementById("biography3").src =biography[2];
document.getElementById("biography4").src =biography[3];

let novelarr=[{url:"https://cdn.penguin.com.au/covers/original/9780141332499.jpg",title:"The Great Adventures of Sherlock Holmes",author:"Donald Thomas ",price:"\u20B9 550"},{url:"https://i.harperapps.com/covers/9780062024329/y648.jpg",title:"The Alchemist",author:"Paulo Coelho",price:"\u20B9 1135"},{url:"http://ecx.images-amazon.com/images/I/514GAjvGPTL._SY445_QL70_.jpg",title:"A Scandal In Bohemia",author:"Conan Doyle",price:"\u20B9 838"},{url:"https://i.ebayimg.com/images/g/hH0AAOSwhzZeoT58/s-l400.jpg",title:"Inside George Orwell",author:" Gordon Bowker ",price:"\u20B9 1948"}];

document.getElementById("n1").src=novelarr[0].url;
document.getElementById("title1").innerHTML=novelarr[0].title;
document.getElementById("author1").innerHTML=novelarr[0].author;
document.getElementById("price1").value=novelarr[0].price;

document.getElementById("n2").src=novelarr[1].url;
document.getElementById("title2").innerHTML=novelarr[1].title;
document.getElementById("author2").innerHTML=novelarr[1].author;
document.getElementById("price2").value=novelarr[1].price;

document.getElementById("n3").src=novelarr[2].url;
document.getElementById("title3").innerHTML=novelarr[2].title;
document.getElementById("author3").innerHTML=novelarr[2].author;
document.getElementById("price3").value=novelarr[2].price;

document.getElementById("n4").src=novelarr[3].url;
document.getElementById("title4").innerHTML=novelarr[3].title;
document.getElementById("author4").innerHTML=novelarr[3].author;
document.getElementById("price4").value=novelarr[3].price;

let historyarr=[{url:"https://images-na.ssl-images-amazon.com/images/I/91mq3UEpjGL.jpg", title:"Indian History", author:"krishna Reddy", price:"850"},{url:"https://images-na.ssl-images-amazon.com/images/I/A1w61w8szYL.jpg", title:"Ancient And Medieval India", author:"Poonam Dalal Dahiya", price:"953"},{url:"https://dynamic.indigoimages.ca/books/0743226720.jpg?altimages=false&scaleup=true&width=614&maxheight=614&quality=85&lang=en", title:"1776", author:" David McCullough", price:"1250"},{url:"https://i.pinimg.com/originals/af/0b/6f/af0b6fb2bdfc383c5b902cc894f5e902.jpg", title:"The Guns of August", author:"Barbara W. Tuchman", price:"648"}];

document.getElementById("h1").src=historyarr[0].url;
document.getElementById("titleh1").innerHTML=historyarr[0].title;
document.getElementById("authorh1").innerHTML=historyarr[0].author;
document.getElementById("priceh1").value=historyarr[0].price;