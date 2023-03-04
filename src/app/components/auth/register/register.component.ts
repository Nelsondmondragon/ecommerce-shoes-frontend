import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  formulario!: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.formulario = new FormGroup({
      firstName: new FormControl<string>('', [Validators.required]),
      lastName: new FormControl<string>('', [Validators.required]),
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      password: new FormControl<string>('', [Validators.required, Validators.minLength(8)]),
      password2: new FormControl<string>('', [Validators.required, Validators.minLength(8)])

    });
  }

  ngOnInit(): void {

  }

  register() {
    console.log(this.formulario.value)
    if (this.formulario.valid) {
      this.userService.create(this.formulario.value).subscribe(
        (data) => {
          console.log(data)
          this.router.navigate(["/login"])
        }
      )
    }
  }

  passwordValid(): boolean {
    return ((this.formulario.get('password')!.value === this.formulario.get('password2')!.value));
  }

  isValid(propertie: string): boolean {
    return this.formulario.get(propertie)!.touched && this.formulario.get(propertie)!.valid;
  }

  hasError(propertie: string, hasError: string): boolean {
    return this.formulario.get(propertie)!.touched && this.formulario.get(propertie)!.hasError(hasError);
  }

}
