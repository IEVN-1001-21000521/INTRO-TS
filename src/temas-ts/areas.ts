export class Figuras {
    public base: number;
    public altura: number;
    public radio: number;
    constructor(base: number, altura: number, radio: number) {
        this.base = base;
        this.altura = altura;
        this.radio = radio;
    }
    calcularAreaRectangulo(): number {
        return this.base * this.altura;
    }
    calcularAreaTriangulo(): number {
        return (this.base * this.altura) / 2;
    }
    calcularAreaCirculo(): number {
        return Math.PI * this.radio * this.radio;
    }
}