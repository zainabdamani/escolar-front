import { Component, inject } from '@angular/core';
import { Professor } from '../../../models/professor';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Turma } from '../../../models/turma';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-professor-form',
  standalone: true,
  imports: [FormsModule, MdbFormsModule],
  templateUrl: './professor-form.component.html',
  styleUrl: './professor-form.component.scss'
})
export class ProfessorFormComponent {

professor: Professor = new Professor();
  rotaAtivada = inject(ActivatedRoute);

  constructor(){
    let id = this.rotaAtivada.snapshot.params['id'];
    if(id){
      //AQUI VC VAI CHAMAR O FINDBYID()
      let professor1 = new Professor();
      professor1.id = 1;
      professor1.nome = 'João';
      professor1.cpf = "000000000-01";
      professor1.email = "algo@gmail.com";
      professor1.especialidade = "moda";
          let turma = new Turma();
          turma.nome = '4° Período';
          professor1.turmas = [turma];
          this.professor = professor1;
    }
  }

  save(){
    if(this.professor.id > 0){
      // UPDATE
      alert('estou fazendo um update....');
    }else{
      // SAVE
      alert('estou fazendo um save');
    }
  }

}
