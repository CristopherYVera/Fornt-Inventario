import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [NgFor],
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.css'
})
export class ProductoListaComponent {
  productos:Producto[];

  constructor(private ProductoServicio: ProductoService) {}

  ngOnInit() {
    this.obtenerProductos();
  }

  private obtenerProductos(){
    //consumir los datos del observable (suscribirnos)
    this.ProductoServicio.obtenerProdcutoLista().subscribe(
      (datos => {
        this.productos = datos;
      })
    );
  }
}
