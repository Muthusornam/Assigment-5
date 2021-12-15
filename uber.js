class Uber{
    constructor(name,distance){
        this.name=name;
        this.distance=distance;
    }
    price(){
        return this.distance*14;
    }
}

var p1=new Uber('XXX',9);
console.log(p1.price());

var p2=new Uber('YYY',13);
console.log(p2.price());