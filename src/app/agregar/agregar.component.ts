import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import {Router}  from '@angular/router'
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {
  producto: Producto = new Producto();

  constructor(private productoService:ProductoService , private enrutador:Router){

  }

  onSubmit(){
    this.guardarProducto();
  }

  guardarProducto(){
    this.productoService.agregarProdcuto(this.producto).subscribe(
      {
        next: (datos) => {
          this.irListaProductos();
        },
        error : (error) => {console.log(error)}
      }
    );

  }

  irListaProductos(){
    this.enrutador.navigate(['/productos']);
  }
}
