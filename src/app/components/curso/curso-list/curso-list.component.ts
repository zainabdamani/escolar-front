import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { Curso } from '../../models/curso';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CursoService } from '../../services/curso.service';
import { CursosFormComponent } from "../cursos-form/cursos-form.component";
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-cursos-list',
  standalone: true,
  imports: [CommonModule, CursosFormComponent, MdbModalModule],
  templateUrl: './cursos-list.component.html',
  styleUrl: './cursos-list.component.scss'
})
export class CursosListComponent {

    lista: Curso[] = [];

    roteador = inject(Router);
    cursoService = inject(CursoService);

    cursoEditado!: Curso;

    modalService = inject(MdbModalService);
    @ViewChild("modalCursoForm") modalCursoForm !: TemplateRef<any>;
    modalRef!: MdbModalRef<any>;
     
    
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

novoCurso(){
this.cursoEditado = new Curso();
this.modalRef = this.modalService.open(this.modalCursoForm);
}

editarCurso(curso: Curso){
  this.cursoEditado = curso;
  this.modalRef = this.modalService.open(this.modalCursoForm);
}

retornoCurso(mensagem:any){
this.modalRef.close();
this.findAll();
}
}