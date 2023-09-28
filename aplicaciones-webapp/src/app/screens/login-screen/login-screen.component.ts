import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {
  type: string = 'password';
  showPassword: boolean = false; // Variable para controlar la visibilidad de la contraseña

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public goRegistro(){
    this.router.navigate(["registro"]);
    //this.router.navigate(["producto"]);
  }
  
  public goProducto(){
    this.router.navigate(["producto"]);
  }
  public login() {
    // Aquí puedes agregar la lógica para manejar el inicio de sesión
  }

  public togglePasswordVisibility() {
    // Cambia la visibilidad de la contraseña
    this.showPassword = !this.showPassword;
    this.type = this.showPassword ? 'text' : 'password';
  }
}


