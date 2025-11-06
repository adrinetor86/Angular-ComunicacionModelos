export class Producto {

  public nombre: string;
  public imagen: string;
  public precio: number;

  //VAMOS A CREAR UN CONSTRUCTOR CON PARAMETROS PARA QUE RECIBA
  //LA INFORMACIÓN DE LAS PROPIEDADES DIRECTAMENTE

  constructor(name: string, imagen: string, price: number) {
    this.nombre = name;
    this.imagen = imagen;
    this.precio = price;
  }

  // TODO otra manera de crear el objeto
  //     constructor(
  //       public nombre: string,
  //       public imagen: string,
  //       public precio: number
  //     ){}

    }

