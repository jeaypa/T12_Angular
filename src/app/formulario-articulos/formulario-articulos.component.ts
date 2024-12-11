import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ArticulosService } from '../servicios/articulos.service';

@Component({
  selector: 'app-formulario-articulos',
  templateUrl: './formulario-articulos.component.html',
  imports: [FormsModule],
  styleUrls: ['./formulario-articulos.component.css']
})
export class FormularioArticulosComponent {
  nombre: string = '';
  precio: number = 0;

  constructor(private articulosService: ArticulosService, private router: Router) {}

  agregarArticulo() {
    if (this.nombre && this.precio > 0) {
      this.articulosService.agregarArticulo({ nombre: this.nombre, precio: this.precio });
      this.router.navigate(['/tabla']);
    }
  }
}
