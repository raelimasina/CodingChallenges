//using the pillars of OOP: encapsulation, abstraction, inheritance and polymorphism, make genshin character classes
class Character{
    constructor(name, nation, weaponType, hasVision){
        this._name = name;
        this._hasVision = hasVision;
        this._nation = nation;
        this._weaponType = weaponType;
    }
    get name(){
        return this._name;
    }
    get hasVision(){
        return this._hasVision;
    }
    get nation(){
        return this._nation;
    }
    get weaponType(){
        return this._weaponType;
    }
    intro(){
        if(this.hasVision){
            console.log(`Hello, I'm ${this.name} from ${this.nation}. I fight with a ${this.weaponType} and I have a vision.`);
        }
        console.log(`Hello, I'm ${this.name} from ${this.nation}. I fight with a ${this.weaponType}, and I do NOT have a vision.`)
    }
}

class Visions extends Character{
    constructor(name, nation, weaponType, secondarySkill, primarySkill, stars, visionType){
        super(name, nation, weaponType);
        this._hasVision = true;
        this._secondarySkill = secondarySkill;
        this._primarySkill = primarySkill;
        this._stars = stars;
        this._visionType = visionType;
    }
    get visionType(){
        return this._visionType;
    }
    get secondarySkill(){
        return this._secondarySkill;
    }
    get primarySkill(){
        return this._primarySkill;
    }
    get stars(){
        return this._stars;
    }
    intro(){
        console.log(`${this.name} is from ${this.nation} and has a(n) ${this.visionType} Vision. They are a ${this.stars}-star character and fight with (a) ${this.weaponType}. Their special skills are "${this.primarySkill}" and "${this.secondarySkill}".`)
    }
}

class Geo extends Visions{
    constructor(name, nation, weaponType, secondarySkill, primarySkill, stars){
        super(name, nation, weaponType, secondarySkill, primarySkill, stars);
        this._hasVision = true;
        this._visionType = 'Geo';
    }
}

class Anemo extends Visions{
    constructor(name, nation, weaponType, secondarySkill, primarySkill, stars){
        super(name, nation, weaponType, secondarySkill, primarySkill, stars);
        this._hasVision = true;
        this._visionType = 'Anemo';
    }
}

class Hydro extends Visions{
    constructor(name, nation, weaponType, secondarySkill, primarySkill, stars){
        super(name, nation, weaponType, secondarySkill, primarySkill, stars);
        this._hasVision = true;
        this._visionType = 'Hydro';
    }
}

class Pyro extends Visions{
    constructor(name, nation, weaponType, secondarySkill, primarySkill, stars){
        super(name, nation, weaponType, secondarySkill, primarySkill, stars);
        this._hasVision = true;
        this._visionType = 'Pyro';
    }
}

class Cryo extends Visions{
    constructor(name, nation, weaponType, secondarySkill, primarySkill, stars){
        super(name, nation, weaponType, secondarySkill, primarySkill, stars);
        this._hasVision = true;
        this._visionType = 'Cryo';
    }
}

class Dendro extends Visions{
    constructor(name, nation, weaponType, secondarySkill, primarySkill, stars){
        super(name, nation, weaponType, secondarySkill, primarySkill, stars);
        this._hasVision = true;
        this._visionType = 'Dendro';
    }
}

let venti = new Anemo('Venti', 'Teyvat', 'Bow', 'floof', 'bAM floof', 5);
let paimon = new Character('Paimon','Who Knows', 'lot of words', false);

let characters = [venti, paimon];

for(character of characters){
    character.intro();
}
