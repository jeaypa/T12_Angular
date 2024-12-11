import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private articulos: { nombre: string; precio: number }[] = [];

  constructor() {}

  agregarArticulo(articulo: { nombre: string; precio: number }) {
    this.articulos.push(articulo);
  }

  obtenerArticulos() {
    return this.articulos;
  }
}
