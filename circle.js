class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }

    setRadius(radius){
       this.radius = radius;
    }

    getRadius(){
        return parseFloat(this.radius);
    }

    setColor(color){
        this.color = color;
    }

    getColor(color){
        return this.color;
    }

    toString(){    
        return `${this.radius} ${this.color}`;
    }

    getArea(){
        return parseFloat(Math.PI * this.radius * this.radius);
    }

    getCircumference (){
        return parseFloat( (2 * Math.PI) * this.radius);
    }
}

let CIR = new Circle(7.5,"Yellow");
console.log("toString: "+CIR.toString());
CIR.setRadius(15.2);
console.log("getRadius: "+CIR.getRadius().toFixed(2));
CIR.setColor("GREEN");
console.log("getColor: "+CIR.getColor());
console.log("getArea: "+CIR.getArea().toFixed(2));
console.log("getColor: "+CIR.getCircumference().toFixed(2));
