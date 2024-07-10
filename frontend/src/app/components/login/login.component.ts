import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

import { SpinnerComponent } from '../../shared/spinner/spinner.component';

import { ToastrService } from 'ngx-toastr';
import { IUser } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, SpinnerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(private toastr: ToastrService,
              private userService: UserService,
              private router: Router,
              private errorService: ErrorService){}

  public login(){

    // validamos que los campos no vengan vacios
    if (this.username === '' || this.password === '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }

    // creamos el objeto con el nuevo usuario
    const user: IUser = {
      username: this.username,
      password: this.password
    }
    this.loading = true;

    this.userService.login(user).subscribe({
      next: (token) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/dashboard']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this.errorService.msgError(e);
      }
    });
  }



}
