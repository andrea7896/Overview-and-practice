const array = [
    {
        Name:"Andrea",
        Tel:"6751002254",
        Gender:"Female",
        Location:"MX"
    },
    {
        Name:"Fernando",
        Tel:"6754584455",
        Gender:"Male",
        Location:"MX"
    },
    {
        Name:"Laura",
        Tel:"6754851244",
        Gender:"Female",
        Location:"USA"
    },
    {
        Name:"Isis",
        Tel:"6751452366",
        Gender:"Female",
        Location:"USA"
    },
    {
        Name:"Ari",
        Tel:"6751284566",
        Gender:"Female",
        Location:"MX"
    }
];

//Ordenando nombres alfabeticamente
const sorting = (data) => {
 data.sort((a,b) =>{
     return a.Name > b.Name ? 1 : a.Name < b.Name ? -1 : 0;
 });
};

//Filtrando un valor por Key
//x es cada elemento del arreglo
//por cada x revisa x en Key prop y compara contra el valor
//que estamos buscando
const filtering = (data,prop,value) =>{
    return data.filter(x => x[prop] === value );
    };

//Agrupar todos los objetos por una propiedad que
//nosotros le enviamos
//creando un nuevo arreglo si el objeto de la propiedad
//no ha sido creado
const grouping = (data,prop) =>{
 return data.reduce((current,x) => {
    if(!current[x[prop]]){
      current[x[prop]] = [];
    } 
      current[x[prop]].push(x);
      return current;
    
 },{});
}

//MODIFICAMOS EL ARREGLO INICIAL, CON UNO NUEVO
//Que contiene los elementos ya existentes y una nueva
//propiedad color donde el valor se asigna de acuerdo
//a la condicion genero
const mapingColors = (data) => {
    return data.map(x => {
        return {...x, color: x.Gender === "Male" ? "Red" : "Blue"}
    });
};

//  const filteredArray = filtering(array,"Name","Isis");   
// sorting(array);
// console.log(array);
// console.log(filteredArray);

// const groupedArray = grouping(array,"Location");
// const mapedArray = mapingColors(array);
// //console.log(groupedArray);

// console.log(mapedArray);



//!!AL FINAL PODEMOS HACER EL CONJUNTO DE FUNCIONES EN UNA SOLA
//VARIABLE FINAL QUE HAGA EL GROUPING,MAPING,FILTERING,
sorting(array);
const FinalArray = grouping(mapingColors(filtering(array,"Location","MX"))
,"Gender");

console.log(FinalArray);