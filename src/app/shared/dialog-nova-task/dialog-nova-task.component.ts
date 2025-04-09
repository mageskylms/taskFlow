import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogModule,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Task } from '../../models/task.model';
import { DialogAlertComponent } from '../dialog-alert/dialog-alert.component';
import { TaskService } from '../../services/task.service.service';


@Component({
  standalone: true,
  selector: 'app-dialog-nova-task',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatDialogModule
  ],
  templateUrl: './dialog-nova-task.component.html',
  styleUrl: './dialog-nova-task.component.css'
})
export class DialogNovaTaskComponent {
  readonly dialogRef = inject(MatDialogRef<DialogNovaTaskComponent>);
  tarefa = '';
  prioridade: Task['prioridade'] = 'média';
  tagsString = '';
  descricao = '';
  comentarios: string [] = [];

  constructor(private dialog: MatDialog, private taskService: TaskService) { }

  @Output() taskCreated = new EventEmitter<void>();

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  criarTask() {
    if (!this.formularioValido()) {
      return;
    }

    const newTask: Task = {
      id: crypto.randomUUID(),
      nomeTarefa: this.tarefa.trim(),
      prioridade: this.prioridade,
      descricao: this.descricao,
      tags: this.tagsString.split(',').map(tag => tag.trim()).filter(tag => tag),
      concluida: false,
      comentarios: this.comentarios,
    };

    this.taskService.criarTask(newTask);

    this.tarefa = '';
    this.tagsString = '';
    this.prioridade = 'média';
    this.taskCreated.emit();

    this.dialogRef.close(true);
  }

  formularioValido(): boolean {
    if (!this.tarefa.trim()) {
      this.openDialog('Campo obrigatório', 'O título da tarefa é obrigatório.');
      return false;
    }

    if (this.tarefa.trim().length < 3) {
      this.openDialog('Título muito curto', 'O título deve ter no mínimo 3 caracteres.');
      return false;
    }

    if (!this.prioridade) {
      this.openDialog('Prioridade não selecionada', 'Por favor, selecione uma prioridade.');
      return false;
    }

    if (!this.descricao.trim()) {
      this.openDialog('Campo obrigatório', 'A descrição da tarefa é obrigatória.');
      return false;
    }


    return true;
  }

  openDialog(title: string, message: string): void {
    this.dialog.open(DialogAlertComponent, {
      data: { title, message }
    });
  }

}
