
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Professor } from '../../models/professor';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-professores-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './professores-form.component.html',
  styleUrl: './professores-form.component.scss'
})
export class ProfessoresFormComponent {

  router = inject(ActivatedRoute);

  roteador = inject(Router);

  professor: Professor = new Professor();

  professorService = inject (ProfessorService);

  constructor(){

  let id = this.router.snapshot.params['id']
  if(id>0){
    this.findById(id);
  }

  }

  save(){
    if(this.professor.id>0){
      this.professorService.update(this.professor, this.professor.id).subscribe({
        next: (mensagem) => {
          alert(mensagem);
          this.roteador.navigate(["/admin/professores"]);
          // this.retorno.emit(this.professor);
        },
        error: (erro) => {
          alert('Deu erro!');
        }
        
      });
    }else{
      this.professorService.save(this.professor).subscribe({
        next: (mensagem) => {
          alert(mensagem);
          this.roteador.navigate(["/admin/professores"]);
          // this.retorno.emit(this.aluno);
        },
        error: (erro) => {
          alert('Deu erro!');
          
        }
      });
    } 
    
  }

  findById(id:number){
    
    this.professorService.findById(id).subscribe({
      next: (professorRetornado) => {
        this.professor = professorRetornado;
      },
      error: (erro) => {
        alert('Deu erro!');
      }
    });

  }
}
