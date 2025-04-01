import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Turma } from '../../models/turma';
import { TurmaService } from '../../services/turma.service';
import { ProfessoresListComponent } from '../professores-list/professores-list.component';
import { CommonModule } from '@angular/common';
import { Professor } from '../../models/professor';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-turmas-form',
  standalone: true,
  imports: [
    MdbFormsModule,
    FormsModule,
    ProfessoresListComponent,
    CommonModule,
    MdbModalModule
  ],
  templateUrl: './turmas-form.component.html',
  styleUrl: './turmas-form.component.scss',
})
export class TurmasFormComponent {
  roteador = inject(ActivatedRoute);
  turmaService = inject(TurmaService);
  router = inject(Router);

  @ViewChild('modalProfessorList') modalProfessorList!: TemplateRef<any>;
  modalService = inject(MdbModalService);
  modalRef!: MdbModalRef<any>;

  

  turma: Turma = new Turma();

  constructor() {
    let id = this.roteador.snapshot.params['id'];
    if (id > 0) {
      this.findById(id);
    }
  }

  save() {
    if (this.turma.id > 0) {
      this.turmaService.update(this.turma, this.turma.id).subscribe({
        next: (mensagem) => {
          alert(mensagem);
          this.router.navigate(["admin/turmas"]);
        },
        error: (erro) => {
          alert('Deu erro!');
        },
      });
    } else {
      this.turmaService.save(this.turma).subscribe({
        next: (mensagem) => {
          alert(mensagem);
          this.router.navigate(["admin/turmas"]);
        },
        error: (erro) => {
          alert('Deu erro!');
        },
      });
    }
  }

  findById(id: number) {
    this.turmaService.findById(id).subscribe({
      next: (turmaRetornada) => {
        this.turma = turmaRetornada;
      },
      error: (erro) => {
        alert('Deu erro!');
      },
    });
  }

  retornoProfessorList(professores: Professor){

    if(this.turma.professores == null)
      this.turma.professores = [];

    this.turma.professores.push(professores);
    this.modalRef.close();
  }

  buscarProfessores(){
    this.modalRef = this.modalService.open(this.modalProfessorList, {modalClass: "modal-xl"});
  }

  deletaProfessor(professor: Professor){
    let indice = this.turma.professores.findIndex(x => {return x.id == professor.id});
    this.turma.professores.splice(indice,1);
  }
}