import { Component } from '@angular/core';
import { Professor } from '../../../models/professor';
import { Turma } from '../../../models/turma';

@Component({
  selector: 'app-professor-list',
  standalone: true,
  imports: [],
  templateUrl: './professor-list.component.html',
  styleUrl: './professor-list.component.scss'
})
export class ProfessorListComponent {

  lista: Professor[] = [];

  constructor() {
    let professor1 = new Professor();
    professor1.id = 1;
    professor1.nome = 'João Kleber';
    professor1.cpf = "000000000-00";
    professor1.email = "professor@gmail.com";
    professor1.especialidade = "Devops";
    let turmas: Turma[]=[];
    let turma01: Turma = new Turma();
    turmas.push(turma01);
    professor1.turmas = turmas;
    
    
    let professor2 = new Professor();
    professor2.id = 1;
    professor2.nome = 'Maria Joaquina';
    professor2.cpf = "000000000-02";
    professor2.email = "professora@gmail.com";
    professor2.especialidade = "Cybersec";
    let turma02: Turma = new Turma();
    turmas.push(turma02);
    professor2.turmas = turmas;

    let professor3 = new Professor();
    professor3.id = 1;
    professor3.nome = 'Julia';
    professor3.cpf = "000000000-03";
    professor3.email = "professorajulia@gmail.com";
    professor3.especialidade = "Moda";
    let turma03: Turma = new Turma();
    turmas.push(turma03);
    professor3.turmas = turmas;

    this.lista.push(professor1);
    this.lista.push(professor2);
    this.lista.push(professor3);

  }

  delete(professor:Professor){
    if (confirm('Deseja deletar?')) {
    let indicie = this.lista.findIndex(x=> {return x.id == professor.id});
    this.lista.splice(indicie, 1);
    }
  }

}
