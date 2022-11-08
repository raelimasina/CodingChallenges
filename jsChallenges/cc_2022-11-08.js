//Today I decided to solidify my understanding of OOP with several OOP coding challenges

//GRINCH STOLE CHRISTMAS
//need to store original method in a variable so that it can be used
const originalDate = Date.prototype.getDate;
//then can modify the method
Date.prototype.getDate = function getGrinchDate() {
  //store the original date in a variable by calling the original method
  //and passing in 'this' as the parameter
  const date = originalDate.call(this);
  
  if(this.getMonth()===11 && date ===25){
    return 26;
  }else{
    return date;
  }
}


//FATPHOBIC PIRATES
function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
  
this.isWorthIt = function(){
    const crewDraft = this.crew*1.5;
    const loot = this.draft - crewDraft;
    if(loot > 20){
      return true;
    }else{
      return false;
    }
  }
}


//PARKING LOT
//for this one, I got it to work on a shallow level, however could not get it to work where the system couldn't move vehicles.
Bike.prototype.type = 'bike';
Car.prototype.type = 'car';
Van.prototype.type = 'van';


class ParkingLot {
  constructor(size) {
    this.size = size;
    this.availableSpaces = size;
    //this.vehiclesInLot = [];
    this.bikes = [];
    this.cars = [];
    this.vans = [];
  }
  park(vehicle) {
    if(vehicle.type === 'bike' && this.availableSpaces >0){
      //this.vehiclesInLot.push(vehicle.license);
      this.bikes.push(vehicle.license);
      this.availableSpaces -= 1; 
      return true;
    }else if(vehicle.type === 'car' && this.availableSpaces>=2){
     // this.vehiclesInLot.push(vehicle.license);
      this.cars.push(vehicle.license);
      this.availableSpaces -= 2;
      return true;
    }else if(vehicle.type === 'van' && this.availableSpaces>=3){
      //this.vehiclesInLot.push(vehicle.license);
      this.vans.push(vehicle.license);
      this.availableSpaces -= 3;
      return true;
    }else{
      return false;
    }
  }
  retrieve(license) {
    const bikeIndex = this.bikes.indexOf(license);
    const carIndex = this.cars.indexOf(license);
    const vanIndex = this.vans.indexOf(license);
    if(bikeIndex >= 0){
      this.bikes.splice(bikeIndex,1);
      this.availableSpaces +=1;
      return true;
    }else if (carIndex >= 0){
      this.cars.splice(carIndex,1);
      this.availableSpaces +=2;
      return true;
    }else if (vanIndex >= 0){
      this.vans.splice(vanIndex,1);
      this.availableSpaces +=3;
      return true;
    }else{
      return false;
    }
  }
}
