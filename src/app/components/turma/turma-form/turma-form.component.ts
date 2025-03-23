import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Turma } from '../../../models/turma';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-turma-form',
  standalone: true,
  imports: [FormsModule, MdbFormsModule],
  templateUrl: './turma-form.component.html',
  styleUrl: './turma-form.component.scss'
})
export class TurmaFormComponent {

 turma : Turma = new Turma();
  rotaAtivada = inject(ActivatedRoute);

  constructor(){
    let id = this.rotaAtivada.snapshot.params['id'];
    if(id){
      //AQUI VC VAI CHAMAR O FINDBYID()
      let turma1 = new Turma();
          turma1.id = 1;
          turma1.nome = 'João';
          turma1.semestre = "000000000-00";
          turma1.ano = 2024;
          turma1.turno = "Matutino";
    }
  }

  save(){
    if(this.turma.id > 0){
      // UPDATE
      alert('estou fazendo um update....');
    }else{
      // SAVE
      alert('estou fazendo um save');
    }
  }

}
