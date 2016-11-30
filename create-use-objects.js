//Create and use Objects Assignment
//1. Create new objects using object initializers and constructor functions.
    //Example of an object initializer function:
    var object = {
        name: "John Smith",
        age: 25,
        home: { myCity: "Las Vegas"},
    }
    //Example of an object constructor function:
    function dog(name, age, color, breed) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.breed = breed;
    }
    var myDog = new dog("Woofy", 5, "black", "Labrador");


//2. Define properties and methods of an object.
    //A property is an association between a name (or key) and a value.
    //A method are the action that can be performed on objects - or, properties containing function definitions.

//3. Use "this" for object references.
    var dogName = {
        firstName: "Woofy",
        lastName: "Smith",
        fullName: function() {
            console.log(this.firstName + " " + this.lastName);
        }
    }

//4. Define getters and setters for an object.
    //Getter: is a method that gets you the value of a specific property.
    //Setter: is a method that sets the value of a specific property.

//5. Compare objects for equality.
    a = "potato";
    b = "chips";
    a === b;

//6. Explain concept of "object" within JavaScript.
    //An object is a collection of properties, and a property is an associate between a name (or key) and a value.

//7. Explain differences between "class-based" and "prototype-based" languages.
    //Class-based languages: A language in which classes inherit from classes and create subclass relationships. Ex. Java, Python, etc.
    //Prototype-based languages: A language in which working object instances are used - objects inherit directly from other objects. Ex. JavaScript