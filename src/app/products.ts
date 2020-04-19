export interface Product {
    id: number;
    descripcion: string;
    tipo: Tipos;
    fechaDeVencimiento: string;
    precio: number;
    rutaDeFoto: string;
  }
  

 export  enum Tipos {
   Liquido,
   Solido
}