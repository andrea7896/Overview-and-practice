var x = {
    prop:35,
    f: function(){
        return this.prop;
    },
    a: () => {
        return x.prop;
    }
}

x.newProp = {};
x.newProp.a = 5;
x.newProp.b = {};
x.newProp.b.a = {};

x.arrFun = () => {console.log("Hi! I'm the object's function with arrow!")}
x.norFun = function(){console.log("I'm the normal object's function")}

x.arrFun();
x.norFun();
console.log(x);

var x = {
    val1:5,
    val2:2,
    val3:4
}

var y = Object.create(x);
y.valor4 = 10;
console.log(Object.keys(x));
console.log(Object.keys(y));


// function sumar(obj){
//     return Object.keys(obj).reduce(((current, x) => current + obj[x]),0)
// }
// console.log(sumar(Object.keys(x)));

function sumar (arr){
    return arr.reduce(((current,x) => 
        current + x),0)
}

const valores = Object.keys(x).map((prop) => x[prop])
console.log(sumar(valores));

if(!Array.prototype.hasOwnProperty("adding")){
    Object.defineProperty(Array.prototype,"adding",{
        value: function(){
            return this.reduce((current,p)=>current+p,0)
        }
    });
}
const newValues=[3,2,1];
console.log(newValues.adding());

// var y1 = [...x]; //una copia de x
// var y2 = x; //referencia a x
// var y3 = Object.create(x); //herencia, un objeto de x, extender 

var x = {
    valor1: 35,
    valor2: 50,
    valor3: 20,
    valor4: "Hola"
};  
const newArray = Object.keys(x).filter((y) => typeof x[y] == "number").map((y) => x[y]);
console.log(newArray);


const user = {
    name: "Usuario de user",
    email: "correo@correo.com",
    login : function () {
        alert(`Hi ${this.name}`);
    },
    logout : function () {
        alert(`Bye ${this.name}`);
    }
    
};


// let admin = Object.create(user);
// admin.sales = 5000;
// admin.checkSales = function(){
//     alert (`You sold $${this.sales}`)
// };


// let customer = Object.create(user);
// customer.balance = 500;
// customer.checkBalance = function(){
//     alert(`You have $${this.balance}`)
// };


// console.log(admin.sales);
// console.log(customer.sales);
// console.log(admin.name,admin.email);

let Admin = function(name = "Usuario", email = "usuario@usuario.com"){
    const admin = Object.create(user);
    admin.sales = 5000;
    admin.checkSales = function(){
    alert (`You sold $${this.sales}`)
};
return admin;
}

let Customer = function(name="Usuario",email=""){
    const customer=Object.create(user);
    customer.name= name || "Usuario",
    customer.email=email,
    customer.balance=5000,
    customer.checkbalance = function() {
        console.log(`You have $${this.balance}`);
    }
    return customer;
};

const a = new Admin();
const b = new Customer("Andrea","andy@hotmail.com");

console.log(a)
console.log(a.name) //Como admin no tiene prop nombre, va y busca en su
//padre que si tiene el name definido, por que se lo heredo al ser un admin de tipo user
console.log(b.name) //Al contrario de el customer que si sobreescribe la prop nombre
//con lo que ingresa al crear al objeto de tipo customer