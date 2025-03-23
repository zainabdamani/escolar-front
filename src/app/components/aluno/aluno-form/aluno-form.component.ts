import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Aluno } from '../../../models/aluno';
import { ActivatedRoute } from '@angular/router';
import { Turma } from '../../../models/turma';

@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [FormsModule, MdbFormsModule],
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.scss'
})
export class AlunoFormComponent {
  aluno: Aluno = new Aluno();
  rotaAtivada = inject(ActivatedRoute);

  constructor(){
    let id = this.rotaAtivada.snapshot.params['id'];
    if(id){
      //AQUI VC VAI CHAMAR O FINDBYID()
      let aluno1 = new Aluno();
          aluno1.id = 1;
          aluno1.nome = 'João';
          aluno1.cpf = "000000000-00";
          aluno1.telefone = "45 988277590";
          aluno1.cadastroCompleto = true;
          let turma = new Turma();
          turma.nome = '4° Período';
          aluno1.turma = turma;
          this.aluno = aluno1;
    }
  }

  save(){
    if(this.aluno.id > 0){
      // UPDATE
      alert('estou fazendo um update....');
    }else{
      // SAVE
      alert('estou fazendo um save');
    }
  }
}

