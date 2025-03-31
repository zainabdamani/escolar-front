import { Component, inject } from '@angular/core';
import { Curso } from '../../models/curso';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-cursos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos-list.component.html',
  styleUrl: './cursos-list.component.scss'
})
export class CursosListComponent {

    lista: Curso[] = [];

    roteador = inject(Router);
    cursoService = inject(CursoService);
    
      constructor(){
    
        this.findAll();
    
      }
    
      findAll(){
          this.cursoService.findAll().subscribe({
            next: (listaCursoRetornado) => {
              this.lista = listaCursoRetornado;
            },
            error: (erro) => {
              alert('Deu erro!');
            }
          });
        }
      
        deleteById(curso : Curso){
          
          if (confirm("Deseja deletar o aluno" + curso.nome + "?")){
            this.cursoService.deleteById(curso.id).subscribe({
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
}