class Vehical{
    model="benze";
    year=2014;
    wheels=4;
    fueltype="petrol";
    cost=200000;
}
var vehical1=new Vehical()
var vehical2=new Vehical()
console.log(vehical1)
console.log(vehical2.model="honda")
//console.log(vehical1.year=2018)
//console.log(vehical1.model="Rangerover")
class Vehicaltype{
    constructor(model,year,wheels,fueltype,cost){
    this.model=model;
    this.year=year;
    this.wheels=wheels;
    this.fueltype=fueltype;
    this.cost=cost;
}
}
var vehical101=new Vehicaltype('range-rover',1991,4,'electric',5000000)
var vehical201=new Vehicaltype('honda',1998,4,'petrol',120000)
var vehical301=new Vehicaltype('benz',1870,4,'Disel',150000)

console.log(vehical101)
console.log(vehical201)
console.log(vehical301)