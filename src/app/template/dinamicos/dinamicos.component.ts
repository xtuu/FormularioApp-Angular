import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona {
  nombre: string;
  favorito: Favorito[]
}


interface Favorito {
  id: number;
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
})
export class DinamicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm


  persona: Persona = {
    nombre: 'Adrian',
    favorito: [
      { id: 1, nombre: 'League of Legends' },
      { id: 2, nombre: 'Crash' }
    ]
  }



  nombreValido(): boolean {
    return this.miFormulario?.controls['nombre']?.invalid
      && this.miFormulario?.controls['nombre']?.touched
  }


  guardar() {
    console.log('Guardar')
  }

}
