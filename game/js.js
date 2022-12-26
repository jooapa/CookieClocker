bakePower = 1;
Cookies = 0;
grandpaCost = 10 * bakePower; //grandpa cost
function onload(){
innerHTML();
}
function bakeCookie(){ //bake cookie
    Cookies = Cookies + bakePower;
    innerHTML();
}
function upgradeID1(){
    if (Cookies >= grandpaCost){
        Cookies -= grandpaCost; //current cookies - grandpa cost 
            bakePower++; //+1 more cookies baked 
            grandpaCost = 10 * bakePower + grandpaCost; //grandpa cost multiplier
            innerHTML();
    }
    
}

function innerHTML(){
    document.getElementById("CookieID").innerHTML = "Cookies:" + Cookies;
    document.getElementById("grandpaID").innerHTML = ": "  + bakePower;
    document.getElementById("grandpaCost").innerHTML = grandpaCost;
}

