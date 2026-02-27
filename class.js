// todo class
// class is a blueprint for creating objects.
// class is a template for creating objects.
// class is a user defined data type.
//class is a way to create objects in a more organized way.

/*class Human{
    //properties
    age=13;// public property
    #wt=50// private property  
    ht=180;
    //method
    eat(){
        console.log("eating");
    }
    sleep(){
        console.log("sleeping",this.#wt);
    }
    running(){
        console.log("running");
    }
}
let obj1=new Human();
console.log(obj1.age);
obj1.sleep();
let a1=Date();
console.log(a1);*/
let obj={
    name:"anu",
    wt:50,
}
obj.name="shruti";
console.log(obj);
//todo obj
// object is a collection of key value pairs.
//object are dynamic in nature.
//todo object cloning
let obj2=Object.assign({},obj);
console.log(obj2); 