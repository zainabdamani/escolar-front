import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Curso } from '../../models/curso';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-cursos-form',
  standalone: true,
  imports: [FormsModule,MdbFormsModule],
  templateUrl: './cursos-form.component.html',
  styleUrl: './cursos-form.component.scss'
})
export class CursosFormComponent {

  router = inject(ActivatedRoute);
  roteador = inject(Router);

  cursoService = inject(CursoService);
  
    curso: Curso = new Curso();
  
    constructor(){
  
      let id = this.router.snapshot.params['id'];
      if(id>0){
        this.findById(id);
      }
  
    }
  
    save(){
      if(this.curso.id>0){
        this.cursoService.update(this.curso, this.curso.id).subscribe({
          next: (mensagem) => {
            alert(mensagem);
            this.roteador.navigate(["/admin/cursos"]);
           
          },
          error: (erro) => {
            alert('Deu erro!');
          }
          
        });
      }else{
        this.cursoService.save(this.curso).subscribe({
          next: (mensagem) => {
            alert(mensagem);
            this.roteador.navigate(["/admin/cursos"]);
          },
          error: (erro) => {
            alert('Deu erro!');
            
          }
        });
      } 
      
    }
  
    findById(id:number){
      
      this.cursoService.findById(id).subscribe({
        next: (cursoRetornado) => {
          this.curso = cursoRetornado;
        },
        error: (erro) => {
          alert('Deu erro!');
        }
      });
  
    }
}