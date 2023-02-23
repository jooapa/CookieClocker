cakeLevel = 1;
class Maincake{    
    constructor(cakes, multiplyCake, cakePrice){
    this.cakes = cakes * cakeLevel;
    this.multiplyCake = multiplyCake;
    this.cakePrice = cakePrice;
    }  
    giveCake(){
        this.cakes += 1 * this.multiplyCake;
        this.näytäTiedot();
    }

    upgradeCake(){
        if(this.cakes >= this.cakePrice){
            this.cakes -= this.cakePrice
            this.cakePrice *= 2
            this.multiplyCake += 1
            this.näytäTiedot()
        }
    }
    improveCake(){
        
    }
    näytäTiedot(){
        document.getElementById("tiedot").innerHTML = "Cakes: " + this.cakes;
        document.getElementById("tiedot2").innerHTML = "Cake Multiplier: " + this.multiplyCake;
        document.getElementById("tiedot3").innerHTML = "Cake Upgrade Price: " + this.cakePrice;
    }

    
}

let cake1 = new Maincake(0, 1, 10);