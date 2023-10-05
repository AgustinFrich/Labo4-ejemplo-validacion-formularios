import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //
  public forma: FormGroup;

  public constructor(private fb: FormBuilder) {
    this.forma = fb.group({
      nombre: [
        '',
        [
          Validators.minLength(6),
          Validators.required,
          Validators.maxLength(15),
          this.spacesValidator,
        ],
      ],
    });
  }

  private spacesValidator(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    if (spaces) {
      return { contieneEspacios: { cantidadDeEspacios: 5 } };
    } else {
      return null;
    }
  }

  public aceptar() {
    // acá podríamos haber guardado los valores de nuestros inputs con ngModel como hacíamos siempre
    // O
    // Acceder a ellos a través de forma.values, lo que nos evitaría la repetición de datos y tener que declarar todas las variables en la clase.
  }
}
