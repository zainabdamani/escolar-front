import { Component } from '@angular/core';
import { Turma } from '../../../models/turma';

@Component({
  selector: 'app-turma-list',
  standalone: true,
  imports: [],
  templateUrl: './turma-list.component.html',
  styleUrl: './turma-list.component.scss'
})
export class TurmaListComponent {

  
    lista: Turma[] = [];
  
    constructor() {
      let turma1 = new Turma();
      turma1.id = 1;
      turma1.nome = '3° periodo';
      turma1.semestre = "2021/2";
      turma1.ano = 2024;
      turma1.turno = "Matutino";
  
      let turma2 = new Turma();
      turma2.id = 2;
      turma2.nome = '4° periodo';
      turma2.semestre = "2022/02";
      turma2.ano = 2024;
      turma2.turno = "Vespertino";
  
      let turma3 = new Turma();
      turma3.id = 3;
      turma3.nome = '10° período';
      turma3.semestre = "2025/01";
      turma3.ano = 2024;
      turma3.turno = "Noturno";
  
      this.lista.push(turma1);
      this.lista.push(turma2);
      this.lista.push(turma3);
  
    }
  
    delete(turma:Turma){
      if (confirm('Deseja deletar?')) {
      let indicie = this.lista.findIndex(x=> {return x.id == turma.id});
      this.lista.splice(indicie, 1);
      }
    }

}
