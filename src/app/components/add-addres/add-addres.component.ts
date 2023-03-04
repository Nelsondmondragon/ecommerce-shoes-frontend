import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-addres',
  templateUrl: './add-addres.component.html',
  styleUrls: ['./add-addres.component.css'],
}
)
export class AddAddresComponent {
  formulario: FormGroup;
  department: string[];
  municipalities: string[];
  typeStreet: string[];

  constructor() {
    this.department = ["Caqueta", "Putumayo", "Ricaute", "Ojeado", "DDDD"]
    this.typeStreet = ["Avenida", "Avenida Calle", "Avenida Carrera", "Calle", "Carrera", "Circular", "Circunvalar"];
    this.municipalities = ["Florencia", "Doncello"];
    this.formulario = new FormGroup({
      firstName: new FormControl<string>('', [Validators.required]),
      lastName: new FormControl<string>('', [Validators.required]),
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      password: new FormControl<string>('', [Validators.required, Validators.minLength(8)]),
      password2: new FormControl<string>('', [Validators.required, Validators.minLength(8)])

    });
  }

  addAddres() {

  }

}
