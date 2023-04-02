import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman', 'Hulk', 'Thor', 'Capitan America']
  heroeBorrado: string = '';


  borrarHeroe() {
    //El método shift borra el primer elemento de un arreglo
    this.heroeBorrado = this.heroes.shift() || '';
    
  }



}
