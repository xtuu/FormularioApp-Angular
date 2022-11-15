import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';

// import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  // styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {





  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.vs.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirPassword: ['', [Validators.required]],
  }, {
    validators: [this.vs.camposIguales('password', 'confirPassword')]
  })

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorService,
    private emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Adrian Fernandez',
      email: 'test1@test.com',
      username: 'xtuu',
      password: '123456',
      confirPassword: '123456',

    })
  }



  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched
  }


  emailRequired() {
    return this.miFormulario.get('email')?.errors?.['required'] 
    && this.miFormulario.get('email')?.touched
  }


  emailFormato() {
    return this.miFormulario.get('email')?.errors?.['pattern'] 
    && this.miFormulario.get('email')?.touched
  }


  emailTomado() {
    return this.miFormulario.get('email')?.errors?.['emailTomado'] 
    && this.miFormulario.get('email')?.touched
  }

  submitFormulario() {
    console.log(this.miFormulario.value)

    this.miFormulario.markAllAsTouched()
  }

}
