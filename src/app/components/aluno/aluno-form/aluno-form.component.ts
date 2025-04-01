import { Component, EventEmitter, inject, Inject, Input, input, Output, TemplateRef, ViewChild, viewChild } from '@angular/core';
import { PrincipalComponent } from '../../components/layout/principal/principal.component';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import { Aluno } from '../../models/aluno';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../../services/aluno.service';
import { TurmasFormComponent } from '../turmas-form/turmas-form.component';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Turma } from '../../models/turma';
import { TurmasListComponent } from '../turmas-list/turmas-list.component';

@Component({
  selector: 'app-alunos-form',
  standalone: true,
  imports: [FormsModule, MdbFormsModule,TurmasListComponent],
  templateUrl: './alunos-form.component.html',
  styleUrl: './alunos-form.component.scss'
})
export class AlunosFormComponent {

  router = inject(ActivatedRoute);

  @Input("aluno") aluno: Aluno = new Aluno();
  @Output("retorno") retorno = new EventEmitter();

  @ViewChild("modalTurmaList") modalTurmaList!: TemplateRef<any>;
  modalService = inject(MdbModalService);
  modalRef!: MdbModalRef<any>;

  alunoService = inject(AlunoService);

  roteador = inject(Router);

  constructor(){

    let id = this.router.snapshot.params['id'];
    if(id>0){
      this.findById(id);
    }

  }

  save(){
    if(this.aluno.id>0){
      this.alunoService.update(this.aluno, this.aluno.id).subscribe({
        next: (mensagem) => {
          alert(mensagem);
          this.roteador.navigate(["/admin/alunos"]);
          this.retorno.emit(this.aluno);
        },
        error: (erro) => {
          alert('Deu erro!');
        }
        
      });
    }else{
      this.alunoService.save(this.aluno).subscribe({
        next: (mensagem) => {
          alert(mensagem);
          this.roteador.navigate(["/admin/alunos"]);
          this.retorno.emit(this.aluno);
        },
        error: (erro) => {
          alert('Deu erro!');
          
        }
      });
    } 
    
  }

  findById(id:number){
    
    this.alunoService.findById(id).subscribe({
      next: (alunoRetornado) => {
        this.aluno = alunoRetornado;
      },
      error: (erro) => {
        alert('Deu erro!');
      }
    });

  }

  buscarTurma(){
    this.modalRef = this.modalService.open(this.modalTurmaList, {modalClass: 'modal-xl'});

  }

  retornoTurma(turma: Turma){
    this.aluno.turma = turma;
    this.modalRef.close();
  }
}
