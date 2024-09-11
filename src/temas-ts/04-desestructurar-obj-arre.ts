interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    year:number;
}

const reproductor:Reproductor={
    volumen:50,
    segundo:30,
    cancion:"La Vida es un Sueño",
    detalles:{
        autor:"Jose Aguitron",
        year:1500}
}

const{volumen, segundo, cancion, detalles}=reproductor;
const{autor,year}=detalles;

console.log(`El volumen Actual es: ${volumen}`)
console.log(`Los Segundos son: ${segundo}`)
console.log(`La cancion es: ${cancion}`)
console.log(`El cantante es: ${autor}`)
console.log(`El Año es: ${year}`)

const dbz:string[]=['Goku', 'Majin Boo', 'Babidi', 'Frezeer']
console.log(`Personaje 1: ${dbz[0]}`)
console.log(`Personaje 2: ${dbz[1]}`)
console.log(`Personaje 3: ${dbz[2]}`)
console.log(`Personaje 4: ${dbz[3]}`)

const [a,b,c]=dbz;
console.log(`Personaje 1: ${a}`)
console.log(`Personaje 2: ${b}`)
console.log(`Personaje 3: ${c}`)
