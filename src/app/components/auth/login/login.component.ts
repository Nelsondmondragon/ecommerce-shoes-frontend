import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  messageError: string = '';





  formulario!: FormGroup;
  token: string = '';
  constructor(private authService: AuthService, private router: Router) {
    this.formulario = new FormGroup({
      email: new FormControl<string>("", [Validators.required, Validators.email]),
      password: new FormControl<string>("", Validators.required)
    });
  }

  login() {
    this.authService.login(this.formulario.value.email, this.formulario.value.password)
      .subscribe({
        complete: () => { this.router.navigate(['/']); }
        , error: (error) => { this.messageError = error; }
      });
  }

  isNotValid(propertie: string): boolean {
    return this.formulario.get(propertie)!.touched && this.formulario.get(propertie)!.invalid;
  }


  hasError(propertie: string, hasError: string): boolean {
    return this.formulario.get(propertie)!.touched && this.formulario.get(propertie)!.hasError(hasError);
  }


  isMessageError(): boolean {
    return this.messageError.length > 0;
  }
}
