import { Component } from '@angular/core';
import { Turma } from '../../../models/turma';
import { Aluno } from '../../../models/aluno';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-aluno-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aluno-list.component.html',
  styleUrl: './aluno-list.component.scss'
})
export class AlunoListComponent {

  lista: Aluno[] = [];

  constructor() {
    let aluno1 = new Aluno();
    aluno1.id = 1;
    aluno1.nome = 'João';
    aluno1.cpf = "000000000-00";
    aluno1.telefone = "45 988277590";
    aluno1.cadastroCompleto = true;
    let turma = new Turma();
    turma.nome = '4° Período';
    aluno1.turma = turma;


    //let turmas: Turma[]=[];
    //let turma01: Turma = new Turma();
    // turmas.push(turma01);
    //professor.turmas = turmas;
    //fazer isso em professor
    

   let aluno2 = new Aluno();
    aluno2.id = 2;
    aluno2.nome = 'maria';
    aluno2.cpf = "000000000-01";
    aluno2.telefone = "45 988277555";
    aluno2.cadastroCompleto = true;
    let turma2 = new Turma();
    turma2.nome = '5° Período';
    aluno2.turma = turma2;

    let aluno3 = new Aluno();
    aluno3.id = 3;
    aluno3.nome = 'cafe';
    aluno3.cpf = "000000000-02";
    aluno3.telefone = "45 888888888";
    aluno3.cadastroCompleto = true;
    let turma3 = new Turma();
    turma3.nome = '6° Período';
    aluno3.turma = turma3;

    this.lista.push(aluno1);
    this.lista.push(aluno2);
    this.lista.push(aluno3);

  }

  delete(aluno:Aluno){
    if (confirm('Deseja deletar?')) {
    let indicie = this.lista.findIndex(x=> {return x.id == aluno.id});
    this.lista.splice(indicie, 1);
    }
  }

}
