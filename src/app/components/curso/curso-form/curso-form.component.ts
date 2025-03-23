import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Curso } from '../../../models/curso';
import { ActivatedRoute } from '@angular/router';
import { Turma } from '../../../models/turma';

@Component({
  selector: 'app-curso-form',
  standalone: true,
  imports: [FormsModule, MdbFormsModule],
  templateUrl: './curso-form.component.html',
  styleUrl: './curso-form.component.scss'
})
export class CursoFormComponent {

curso : Curso = new Curso();
  rotaAtivada = inject(ActivatedRoute);

  constructor(){
    let id = this.rotaAtivada.snapshot.params['id'];
    if(id){
      //AQUI VC VAI CHAMAR O FINDBYID()
      let curso1 = new Curso();
          curso1.id = 1;
          curso1.nome = 'Engenharia de software';
          let turma = new Turma();
          turma.nome = '4° Período';
          curso1.turma = turma;
          this.curso = curso1;
    }
  }

  save(){
    if(this.curso.id > 0){
      // UPDATE
      alert('estou fazendo um update....');
    }else{
      // SAVE
      alert('estou fazendo um save');
    }
  }

}
