interface Alumno{
    nombre: string;
    apellido:string;
    edad:number;
    genero: string;
    calificacion?:number;
}



const alumno:Alumno = {
    nombre: 'Jose',
    apellido:'Aguiñon',
    edad:23,
    genero: 'M',
}

console.table(alumno)

let mascotas=['Perico', 'Perro', 'Gato']

console.log(mascotas[1]);
mascotas[1]='Nuevo Perro';
console.log(mascotas[1]);
mascotas.push('Hamster');
console.log(mascotas);

let tem:(string|number)[]=[];

tem.push(11);
tem.push('Mario')

console.log(tem)