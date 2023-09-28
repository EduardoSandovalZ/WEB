import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-registrar-producto-screen',
  templateUrl: './registrar-producto-screen.component.html',
  styleUrls: ['./registrar-producto-screen.component.scss'],
})
export class RegistrarProductoScreenComponent implements OnInit {
  editar: boolean = false;
  productos: any = this.esquemaProducto(); // Inicializa productos usando esquemaProducto

  errors: any = {};

  constructor(private productoService: ProductosService) {}

  ngOnInit(): void {
    console.log("Producto: ", this.productos);
  }

  regresar() {
    // Lógica para regresar
  }

  esquemaProducto() {
    return {
      'id': '',
      'nombre_producto': '',
      'departamento': '',
      'precio': '',
    };
  }

  registrarProducto() {
    // Reiniciar los errores
    this.errors = {};

    // Validación de campos obligatorios
    if (!this.productos.id) {
      this.errors.id = 'Este campo es obligatorio.';
    }

    if (!this.productos.nombre_producto) {
      this.errors.nombre_producto = 'Este campo es obligatorio.';
    }

    if (!this.productos.departamento) {
      this.errors.departamento = 'Este campo es obligatorio.';
    }

    if (!this.productos.precio) {
      this.errors.precio = 'Este campo es obligatorio.';
    }

    // Continúa con las validaciones para cualquier otro campo que sea obligatorio

    // Si hay errores, no envíes el formulario
    const tieneErrores = Object.values(this.errors).some(error => !!error);
    if (tieneErrores) {
      return;
    }

    // Aquí puedes enviar el formulario si no hay errores
    // ...
  }
}
