class Car{
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }

    displayInfo(){
        return `car: ${this.make} ${this.model} year:${this.year}`
    }

    workingFine(){
        return `${this.make} ${this.model} is in great working condition`
    }
}

const myCar = new Car('toyota', 'corola', 2007)
const myCar2 = new Car('Mercedes', 'V-boot', 2001)

console.log(myCar.displayInfo())
console.log(myCar.workingFine())
console.log(myCar2.workingFine())
console.log(myCar2.displayInfo())
 
class ElectricCar extends Car {
    constructor(make, model, year, batterycapacity){
        super(make, model, year)
        this.batterycapacity = batterycapacity
    }
    displayInfo(){
        return `${super.displayInfo()}, battery capacity: ${this.batterycapacity} kwh`
    }

    charging(){
        return `${this.make} ${this.model} is charging...`
    }
}

const myElectric = new ElectricCar('Maybach', 'spot', 2009, 72)

console.log(myElectric.displayInfo())
console.log(myElectric.charging())

const cars = [
    new Car('toyota', 'corola', 2007),
    new ElectricCar('Maybach', 'spot', 2009, 72)
]
cars.forEach((car)=>{
    console.log(car.displayInfo())
})



const obj = {
    name: 'karo',
    age: 20,

   
} 

function isOldEnough(year){
    console.log( `${this.name} was old enough to have beer in ${year}`)
}

const obj2 = {
    name:'joshua'
}
isOldEnough.apply(obj2, ['2009'])
const enough =  isOldEnough.bind(obj, '2009')
enough()

const myItem = new Map()
myItem.set('footballer', 'Rashford')
myItem.set('age', 26)
 console.log(myItem)

 const myNum = new Set([1,1,1,4,3,4,4,4,5,6,7,7,7])
 myNum.add(100)
 myNum.add(50)
 myNum.add(90)
 myNum.clear()

 console.log(myNum)

 const karo = new Map([[23, 'age'],[24, 'year'],[25, 'time']])
 console.log(karo)
  