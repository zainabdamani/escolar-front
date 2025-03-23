import { Component } from '@angular/core';
import { Curso } from '../../../models/curso';
import { Turma } from '../../../models/turma';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curso-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curso-list.component.html',
  styleUrl: './curso-list.component.scss'
})
export class CursoListComponent {

  
    lista: Curso[] = [];
  
    constructor() {
      let curso1 = new Curso();
      curso1.id = 1;
      curso1.nome = 'Engenharia de Software';
      let turma1 = new Turma();
      turma1.nome = '3° Período';
      curso1.turma = turma1;
  
  
      //let turmas: Turma[]=[];
      //let turma01: Turma = new Turma();
      // turmas.push(turma01);
      //professor.turmas = turmas;
      //fazer isso em professor
      
  
      let curso2 = new Curso();
      curso2.id = 1;
      curso2.nome = 'Engenharia de Software';
      let turma2 = new Turma();
      turma2.nome = '4° Período';
      curso2.turma = turma2;

      let curso3 = new Curso();
      curso3.id = 1;
      curso3.nome = 'Engenharia de Software';
      let turma3 = new Turma();
      turma3.nome = '5° Período';
      curso1.turma = turma3;
  
      this.lista.push(curso1);
      this.lista.push(curso2);
      this.lista.push(curso3);
  
    }
  
    delete(curso:Curso){
      if (confirm('Deseja deletar?')) {
      let indicie = this.lista.findIndex(x=> {return x.id == curso.id});
      this.lista.splice(indicie, 1);
      }
    }

}
