import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Turma } from '../../models/turma';
import { TurmaService } from '../../services/turma.service';

@Component({
  selector: 'app-turmas-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './turmas-form.component.html',
  styleUrl: './turmas-form.component.scss'
})
export class TurmasFormComponent {

roteador = inject(ActivatedRoute);
turmaService = inject(TurmaService);

  turma: Turma = new Turma();

  constructor(){

  let id = this.roteador.snapshot.params['id']
  if(id>0){
    this.findById(id);
  }

  }

  save(){
    if(this.turma.id>0){
      this.turmaService.update(this.turma, this.turma.id).subscribe({
        next: (mensagem) => {
          alert(mensagem);
          
        },
        error: (erro) => {
          alert('Deu erro!');
        }
        
      });
    }else{
      this.turmaService.save(this.turma).subscribe({
        next: (mensagem) => {
          alert(mensagem);
          this.roteador;
          
        },
        error: (erro) => {
          alert('Deu erro!');
          
        }
      });
    } 
    
  }

  
  findById(id:number){
    
    this.turmaService.findById(id).subscribe({
      next: (turmaRetornada) => {
        this.turma = turmaRetornada;
      },
      error: (erro) => {
        alert('Deu erro!');
      }
    });

  }


}