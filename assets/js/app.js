let toggle = document.getElementById("switch");
let price_basic = document.getElementById("price_basic");
let price_basic_curText = price_basic.innerHTML;
let price_professional = document.getElementById("price_professional");
let price_professional_curText = price_professional.innerHTML;
let price_master = document.getElementById("price_master");
let price_master_curText = price_master.innerHTML;

toggle.addEventListener("click", function(){
    if(price_basic.innerHTML == price_basic_curText){
        price_basic.innerHTML = "&dollar;19.99";
    }else{
        price_basic.innerHTML = price_basic_curText;
    }
    if(price_professional.innerHTML == price_professional_curText){
        price_professional.innerHTML = "&dollar;24.99";
    }else{
        price_professional.innerHTML = price_professional_curText;
    }
    if(price_master.innerHTML == price_master_curText){
        price_master.innerHTML = "&dollar;39.99";
    }else{
        price_master.innerHTML = price_master_curText;
    }
})