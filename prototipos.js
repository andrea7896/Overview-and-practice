const Factura = {
    sucursal: "Durango",
    vendedor: "Pedro",
    precioTotal:function(){
        return this.articulos.map((x) => 
        x.precio * x.cantidad).reduce((current,x) => current + x,0);
    },
    liquidar: function(balance){
        return (balance - this.precioTotal()).toFixed(2);
    },
    showTotal: function(){
        return `$${this.precioTotal().toFixed(2)}`
    }
};

const Electronico = function(obj) {
    return {
        id: obj.id || 0,
        nombre: obj.nombre || "",
        precio: obj.precio || 0,
        cantidad: obj.cantidad || 0
    }
}

const Alimento = function(obj){
    return {
        id: obj.id || 0,
        nombre: obj.nombre || "",
        precio: obj.precio || 0,
        cantidad: obj.cantidad || 0,
        calidad: obj.calidad || 0,
        frescura: obj.calidad || 0
    }
}


const getItemsElectronicos = function(cantidad){
    const array = []
    for(let i=0; i<cantidad;i++){
        array.push(new Electronico({
            id: i+1,
            nombre: `FacElect${i+1}`,
            precio : parseFloat(Math.random() * (200-1) + 1).toFixed(2),
            cantidad: parseInt(Math.random() * (20-1) + 1)
        }));
    }
    return array;
}

const getItemsAlimentos = function(cantidad){
    const arrayf = []
    for(let i=0; i<cantidad;i++){
        arrayf.push(new Alimento({
            id:i+1,
            nombre: `FactAlim${i+1}`,
            precio : parseFloat(Math.random() * (200-1) + 1).toFixed(2),
            cantidad: parseInt(Math.random() * (20-1) + 1),
            calidad : parseInt(Math.random() * (5-1) + 1),
            frescura: parseInt(Math.random() * (5-1) + 1)
        }));
    }
    return arrayf
}



const FacturacionElectronicos = function(id,nombre){
    let item = Object.create(Factura);
    item.id = id;
    item.nombre = nombre;
    item.articulos = getItemsElectronicos(10);
    return item
}

const FacturacionAlimentos = function(id,nombre){
    let item = Object.create(Factura);
    item.id = id;
    item.nombre = nombre;
    item.articulos = getItemsAlimentos(10);
    item.indiceCalidad = function(){
        const x = this.articulos.reduce(
            (current,y) => {
                return (current = {
                    frescura: current.frescura + y.frescura,
                    calidad: current.calidad + y.calidad
                });
            },{frescura:0,calidad:0}
        );
        return Math.ceil((x.frescura + x.calidad)/2)
    }
    return item
}


console.log(new FacturacionElectronicos(1,"Enero"))
let x = new FacturacionAlimentos(1,"Enero")
console.log(x.precioTotal());
console.log(x.liquidar(500));
console.log(x.showTotal());

console.log(x.indiceCalidad());
