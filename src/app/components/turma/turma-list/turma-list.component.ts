import { Component, EventEmitter, inject, Input, Output, output } from '@angular/core';
import { Turma } from '../../models/turma';
import { TurmaService } from '../../services/turma.service';
import { TurmasFormComponent } from '../turmas-form/turmas-form.component';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-turmas-list',
  standalone: true,
  imports: [TurmasFormComponent, MdbFormsModule,],
  templateUrl: './turmas-list.component.html',
  styleUrl: './turmas-list.component.scss'
})
export class TurmasListComponent {

  @Output("retornoTurma") retornoTurma = new EventEmitter();
  @Input("modoModal") modoModal : boolean = false;

    turmaService = inject(TurmaService);
    lista: Turma[] = [];
  
    constructor(){
  
    this.findAll();
  
    }
  findAll(){
      this.turmaService.findAll().subscribe({
        next: (listaTurmaRetornada) => {
          this.lista = listaTurmaRetornada;
        },
        error: (erro) => {
          alert('Deu erro!');
        }
      });
    }
  
    deleteById(turma : Turma){
      
      if (confirm("Deseja deletar o aluno" + turma.nome + "?")){
        this.turmaService.deleteById(turma.id).subscribe({
          next: (mensagem) => {
            alert(mensagem);
            this.findAll();
          },
          error: (erro) => {
            alert('Deu erro!');
          }
        });
      }
  
      }
      
      selecionarTurma(turma: Turma){
        this.retornoTurma.emit(turma);

      }

}