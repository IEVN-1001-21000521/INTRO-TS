import { Figuras } from './areas';

class Volumenes extends Figuras {
    constructor(base: number, altura: number, radio: number) {
        super(base, altura, radio);
    }
    calcularVolumenPrisma(): number {
        return this.calcularAreaRectangulo() * this.altura;
    }
    calcularVolumenPiramide(): number {
        return (this.calcularAreaTriangulo() * this.altura) / 3;
    }
    calcularVolumenCilindro(): number {
        return Math.PI * this.radio * this.radio * this.altura;
    }
}

const rectangulo = new Figuras(2, 2, 0);
console.log(`Área del rectángulo: ${rectangulo.calcularAreaRectangulo()}`);
const triangulo = new Figuras(10, 2, 0);
console.log(`Área del triángulo: ${triangulo.calcularAreaTriangulo()}`);
const circulo = new Figuras(0, 0, 2);
console.log(`Área del círculo: ${circulo.calcularAreaCirculo()}`);

const prisma = new Volumenes(2, 2, 0);
console.log(`Volumen del prisma: ${prisma.calcularVolumenPrisma()}`);
const piramide = new Volumenes(10, 2, 0);
console.log(`Volumen de la pirámide: ${piramide.calcularVolumenPiramide()}`);
const cilindro = new Volumenes(0, 2, 2);
console.log(`Volumen del cilindro: ${cilindro.calcularVolumenCilindro()}`);

