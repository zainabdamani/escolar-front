import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Professor } from '../../models/professor';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-professores-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './professores-list.component.html',
  styleUrl: './professores-list.component.scss',
})
export class ProfessoresListComponent {
  lista: Professor[] = [];

  @Output("retornoProfessor") retornoProfessor = new EventEmitter();
  @Input("modoModal") modoModal : boolean = false;

  professorService = inject(ProfessorService);

  constructor() {
    this.findAll();
  }

  findAll() {
    this.professorService.findAll().subscribe({
      next: (listaProfessorRetornado) => {
        this.lista = listaProfessorRetornado;
      },
      error: (erro) => {
        alert('Deu erro!');
      },
    });
  }

  deleteById(professor: Professor) {
    if (confirm('Deseja deletar o professor' + professor.nome + '?')) {
      this.professorService.deleteById(professor.id).subscribe({
        next: (mensagem) => {
          alert(mensagem);
          this.findAll();
        },
        error: (erro) => {
          alert('Deu erro!');
        },
      });
    }
  }

  selecionarProfessor(professor: Professor){
    this.retornoProfessor.emit(professor);
  }
}