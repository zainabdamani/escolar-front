import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {MdbFormsModule} from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,MdbFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  usuario!:string;
  senha!:string;

  router = inject(Router);

  logar(){

    if(this.usuario == "admin" && this.senha == "admin"){
      this.router.navigate(["admin/dashboard"]);
      
    }else{
      alert("Usuario ou senha incorretos")
    }
  }
}