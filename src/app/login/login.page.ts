import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { userDb } from '../interfaces/users'; 
import { AuthService } from 'src/app/providers/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  login = userDb;
  pass!: string;
  submitted = false;
  spinner = false;
  error = '';

  constructor(public auth: AuthService, public router: Router) {} /* Este es el constructor */

  onLogin(form: NgForm) { /* Esta es la función onLogin */
     this.submitted = true;
     if (form.valid) { /* Pregunta si el NgForm es válido */
      //  this.spinner = true; //
       this.auth.signIn(form.form.value.email, form.form.value.password) /* Llama a la funcion signIn de AuthService */
         .then(() => {
              this.router.navigateByUrl('/home'); /* Va directo a la página de home*/
         })
         .catch((error) => (this.error = error))
         .finally(() => {
           this.spinner = false;
         });
     }
    
  }

  admin() {
    this.login.email = 'admin@admin.com';
    this.pass = '111111';
  }

  invitado() {
    this.login.email = 'invitado@invitado.com';
    this.pass = '222222';
  }

  usuario() {
    this.login.email = 'usuario@usuario.com';
    this.pass = '333333';
  }

  anonimo() {
    this.login.email = 'anonimo@anonimo.com';
    this.pass = '444444';
  }

  tester() {
    this.login.email = 'tester@tester.com';
    this.pass = '555555'; 
   
  }


}
