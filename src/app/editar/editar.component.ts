import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  producto:Producto = new Producto();
  id:number;

  constructor(private productoServicio:ProductoService, private ruta:ActivatedRoute , private enrutador: Router) {

  }

  ngOnInit(){
    this.id = this.ruta.snapshot.params['id'];
    this.productoServicio.obtenerProductoPorId(this.id).subscribe(
      {
        next:(datos) => this.producto = datos,error:(errores:any)=> console.log(errores)
      }
    );
  }

  onSubmit(){
    this.editarProducto();
  }
  editarProducto(){
    this.productoServicio.editarProducto(this.id,this.producto).subscribe(
      {
        next:(datos) => this.irListaProductos(),
        error:(error) => console.log(error)
      }
    )
  }

  irListaProductos(){
    this.enrutador.navigate(['/productos']);
  }
}
