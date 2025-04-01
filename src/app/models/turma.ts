import { Aluno } from "./aluno";
import { Curso } from "./curso";
import { Professor } from "./professor";

export class Turma {
    id!: number;
    nome!: string;
    semestre!:string;
    ano!: number;
    turno!:string;
    professores!:Professor[];
    aluno!: Aluno[];
    curso!:Curso;
}