import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-screen',
  templateUrl: './registro-screen.component.html',
  styleUrls: ['./registro-screen.component.scss'],
})
export class RegistroScreenComponent implements OnInit {
  public editar: boolean = false;
  public user: any = {};
  public passwordFieldType: string = 'password';
  public confirmPasswordFieldType: string = 'password';
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.user = this.esquemaUser();
    console.log("User: ", this.user);
  }

  public regresar() {}

  public esquemaUser() {
    return {
      'matricula': '',
      'first_name': '',
      'last_name': '',
      'email': '',
      'password': '',
      'confirmar_password': '',
      'fecha_nacimiento': null, // Cambiamos a null por defecto
      'curp': '',
      'rfc': '',
      'edad': '',
      'telefono': '',
      'ocupacion': '',
    };
  }

  public togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  public toggleConfirmPasswordVisibility() {
    this.confirmPasswordFieldType = this.confirmPasswordFieldType === 'password' ? 'text' : 'password';
  }
}
