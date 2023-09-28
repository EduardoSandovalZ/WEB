import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
declare var $:any;

@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss']
})
export class RegistroScreenComponent implements OnInit {
  //Variables del componente registro
  public editar: boolean = false;
  public user:any = {};
 //Para contraseñas
  public hide_1: boolean = false;
  public hide_2: boolean = false;
  public inputType_1: string = 'password';
  public inputType_2: string = 'password';
  //Para detectar errores
  public errors:any ={};

  constructor(
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.user = this.usuariosService.esquemaUser();
    //Imprimir datos en consola
    console.log("User: ", this.user);
  }

  public regresar(){

  }

  //Funciones para password
  showPassword()
  {
    if(this.inputType_1 == 'password'){
      this.inputType_1 = 'text';
      this.hide_1 = true;
    }
    else{
      this.inputType_1 = 'password';
      this.hide_1 = false;
    }
  }

  showPwdConfirmar()
  {
    if(this.inputType_2 == 'password'){
      this.inputType_2 = 'text';
      this.hide_2 = true;
    }
    else{
      this.inputType_2 = 'password';
      this.hide_2 = false;
    }
  }

  //Función para detectar el cambio de fecha
  //Para la fecha
  public changeFecha(event :any){
    console.log(event);
    console.log(event.value.toISOString());
    
    this.user.fecha_nacimiento = event.value.toISOString().split("T")[0];
    console.log("Fecha: ", this.user.fecha_nacimiento);
  }

  public registrar() {
    // Reiniciar los errores
    this.errors = {};
  
    // Validación de campos obligatorios
    if (!this.user.matricula) {
      this.errors.matricula = 'Este campo es obligatorio.';
    }
  
    if (!this.user.first_name) {
      this.errors.first_name = 'Este campo es obligatorio.';
    }
  
    if (!this.user.last_name) {
      this.errors.last_name = 'Este campo es obligatorio.';
    }
  
    if (!this.user.email) {
      this.errors.email = 'Este campo es obligatorio.';
    }
  
    if (!this.user.password && !this.editar) {
      this.errors.password = 'Este campo es obligatorio.';
    }
    
    if (!this.user.fecha_nacimiento) {
      this.errors.fecha_nacimiento = 'Este campo es obligatorio.';
    }
    
    if (!this.user.curp) {
      this.errors.curp = 'Este campo es obligatorio.';
    }
    
    if (!this.user.rfc) {
      this.errors.rfc = 'Este campo es obligatorio.';
    }
    
    if (!this.user.edad) {
      this.errors.edad = 'Este campo es obligatorio.';
    }
    
    if (!this.user.telefono) {
      this.errors.telefono = 'Este campo es obligatorio.';
    }
    
    if (!this.user.ocupacion) {
      this.errors.ocupacion = 'Este campo es obligatorio.';
    }
  
    // Continúa con las validaciones para los demás campos
  
    // Si hay errores, no envíes el formulario
    const tieneErrores = Object.values(this.errors).some(error => !!error);
    if (tieneErrores) {
      return;
    }
  
    // Aquí puedes enviar el formulario si no hay errores
    // ...
  
    // Validar la contraseña si es necesario
    if (this.user.password && this.user.confirmar_password) {
      if (this.user.password === this.user.confirmar_password) {
        alert("Vamos a registrar");
      } else {
        alert("Las contraseñas no coinciden");
        this.user.password = "";
        this.user.confirmar_password = "";
      }
    }
  }
  
}
