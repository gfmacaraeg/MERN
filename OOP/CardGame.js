class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;

    }
    attack(target){
        this.showStat(this)
        this.res -= target.power
        this.showStat(this)
    }
    useEffect(effect, target){
        this.showStat(target)
        
        if(effect.stat == "resilience"){
            if(effect.effect == "raise"){
                target.res += effect.magnitude
            }
            else{
                target.res -= effect.magnitude
            }
        }
        else{
            if(effect.effect = "raise"){
                target.power += effect.magnitude;
            }
            else{
                target.power -= effect.magnitude;
            }
        }
        console.log(effect.text)
        this.showStat(target)
    }
    showStat(target){
        console.log(target.name, target.res, target.power)
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, effect, magnitude){
        super(name,cost)
        this.text = text
        this.stat = stat
        this.effect = effect
        this.magnitude = magnitude
    }
    
}

const redNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackNinja = new Unit("Black Belt Ninja", 4, 5,4);

const hardAlgo = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", "raise", 3);
const unhandled = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2	", "resilience", "reduce", 2);
const pair = new Effect("Pair Programming", 3, "increase target's power by 2", "power", "raise", 2);

redNinja.useEffect(hardAlgo, redNinja);
redNinja.useEffect(unhandled,redNinja);
redNinja.useEffect(pair, redNinja);
blackNinja.attack(redNinja);
