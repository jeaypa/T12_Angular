import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticulosService } from '../servicios/articulos.service';

@Component({
  selector: 'app-tabla-articulos',
  templateUrl: './tabla-articulos.component.html',
  imports: [CommonModule],
  styleUrls: ['./tabla-articulos.component.css']
})
export class TablaArticulosComponent implements OnInit {
  articulos: { nombre: string; precio: number }[] = [];

  constructor(private articulosService: ArticulosService) {}

  ngOnInit() {
    this.articulos = this.articulosService.obtenerArticulos();
  }
}
