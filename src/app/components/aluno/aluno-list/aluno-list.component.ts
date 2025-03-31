import { Component, inject, input, TemplateRef, ViewChild, viewChild } from '@angular/core';
import { PrincipalComponent } from '../../components/layout/principal/principal.component';
import { Aluno } from '../../models/aluno';
import { CommonModule } from '@angular/common';
import { AlunoService } from '../../services/aluno.service';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AlunoFormComponent } from '../aluno-form/aluno-form.component';

@Component({
  selector: 'app-alunos-list',
  standalone: true,
  imports: [CommonModule, AlunoFormComponent,MdbModalModule],
  templateUrl: './aluno-list.component.html',
  styleUrl: './aluno-list.component.scss'
})
export class AlunosListComponent {

  alunoEditado!: Aluno;

  lista: Aluno[] = [];

  alunoService = inject(AlunoService);

  @ViewChild("modalAlunoForm") modalAlunoForm!: TemplateRef<any>;
  modalService = inject(MdbModalService);
  modalRef!: MdbModalRef<any>;

  

  constructor(){

    this.findAll();

  }

  findAll(){
    this.alunoService.findAll().subscribe({
      next: (listaAlunoRetornada) => {
        this.lista = listaAlunoRetornada;
      },
      error: (erro) => {
        alert('Deu erro!');
      }
    });
  }

  deleteById(aluno : Aluno){
    
    if (confirm("Deseja deletar o aluno" + aluno.nome + "?")){
      this.alunoService.deleteById(aluno.id).subscribe({
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
    
    novoAluno(){
      this.alunoEditado = new Aluno();
     this.modalRef = this.modalService.open(this.modalAlunoForm);
    }

    editarAluno(aluno: Aluno){
      this.alunoEditado = aluno;
      this.modalRef = this.modalService.open(this.modalAlunoForm);
    }

    retornoAluno(mensagem:any){
      this.modalRef.close();
      this.findAll();
    }

}