import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/user.interface';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { CommonModule } from '@angular/common';

import { HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, RouterLink, SpinnerComponent, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})

export class SignInComponent {

  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;

  constructor(private userService: UserService ,private toastr: ToastrService, private router: Router){}

  createUser(){

    // validamos que los campos no vengan vacios
    if (this.username === '' || this.password === '' || this.confirmPassword === '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }

    // validamos que las password sean iguales
    if(this.password != this.confirmPassword){
      this.toastr.error('Las contraseñas deben ser iguales', 'Error');
      return;
    }

    // creamos el objeto con el nuevo usuario
    const user: IUser = {
      username: this.username,
      password: this.password
    }

    this.loading = true;
    this.userService.signIn(user).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success('El usuario ha sido regristrado', 'OK');
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this.msgError(e);
      },
    });
  }

  private msgError(e: HttpErrorResponse){
    if(e.error.msg){
      this.toastr.error(e.error.msg, 'Error');
    }else{
      this.toastr.error('UPPPSSS!!!! Error del servidor', 'Error');
    }
  }
}
