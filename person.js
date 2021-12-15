class person{
    constructor(name,age,address,occupation,experience){
        this.name=name;
        this.age=age;
        this.address=address;
        this.occupation=occupation;
        
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    getAddress(){
        return this.address;
    }

    getOccupation(){
        return this.occupation;
    }

    toString(){
        let persons = `Name: ${this.getName()}\nAge: ${this.getAge()}\nAddress: ${this.getAddress()}\nOccupation: ${this.getOccupation()}`
        return persons;
    }
}

let person1 = new person("Muthu",23,"175,Anna nagar","Software Developer");
console.log(person1.toString());