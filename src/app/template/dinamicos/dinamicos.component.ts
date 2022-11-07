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

  nuevoJuego: string = ''
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

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favorito.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favorito.push({ ...nuevoFavorito })
    this.nuevoJuego = ''
  }

  eliminar(index: number) {
    console.log('error')
    this.persona.favorito.splice(index, 1)
  }

  guardar() {
    console.log('Guardar')
  }

}
