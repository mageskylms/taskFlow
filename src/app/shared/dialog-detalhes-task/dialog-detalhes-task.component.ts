import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-dialog-detalhes-task',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatDialogModule,
    MatListModule

  ],
  templateUrl: './dialog-detalhes-task.component.html',
  styleUrl: './dialog-detalhes-task.component.css'
})
export class DialogDetalhesTaskComponent {

  comentario: string = '';
  task: Task;
  prioridade: Task['prioridade'] = 'média';
  tagsString = '';
  descricao = '';
  comentarios: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<DialogDetalhesTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task
  ) {
    this.task = { ...data };
  }

  salvar() {
    this.dialogRef.close(this.task);
  }

  cancelar() {
    this.dialogRef.close(null);
  }

  adicionarComentario() {
    
    if (!this.task.comentarios)
      this.task.comentarios = [];
    this.task.comentarios.push(this.comentario);
    console.log(this.task.comentarios);
    this.comentario = '';
  }

}
