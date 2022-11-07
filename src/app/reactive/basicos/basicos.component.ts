import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  // styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {


  ngOnInit() {
    this.miFormulario.setValue({
      nombre: 'RTX 4080it',
      precio: 1600,
      existencias: 8
    })
  }


  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RT 4080ti'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5),
  // })

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.min(0), Validators.required]],
    existencias: [, [Validators.min(0), Validators.required]],

  })

  constructor(
    private fb: FormBuilder
  ) { }



  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched
  }



  guardar() {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value)

    this.miFormulario.reset()
  }

}
