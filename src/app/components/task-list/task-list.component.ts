import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service.service';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DialogNovaTaskComponent } from '../../shared/dialog-nova-task/dialog-nova-task.component';
import { MatLabel } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DialogDetalhesTaskComponent } from '../../shared/dialog-detalhes-task/dialog-detalhes-task.component';

@Component({
  selector: 'app-task-list',
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    MatLabel,
    MatSelectModule,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  readonly dialog = inject(MatDialog);
  readonly prioridades: Task['prioridade'][] = ['alta', 'média', 'baixa'];
  tasks: Task[] = [];
  filtro: Task['prioridade'] | 'todas' = 'todas';
  mostrarConcluidas = false;
  totalConcluidas: number = 0;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.pegarTasks();
    this.tasksConcluidas;
  }

  abrirDetalhes(task: Task) {
    const dialogRef = this.dialog.open(DialogDetalhesTaskComponent, {
      data: task,
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result: Task | null) => {
      if (result) {
        this.taskService.atualizarTask(result);
        this.reloadTasks();
      }
    });
  }

  removeTask(id: string) {
    this.taskService.excluirTask(id);
    this.tasks = this.taskService.pegarTasks();
  }

  reloadTasks() {
    this.tasks = this.taskService.pegarTasks();
  }

  novaTask(): void {
    const dialogRef = this.dialog.open(DialogNovaTaskComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.reloadTasks();
      }

    });
  }

  getTasksPorPrioridade(prioridade: Task['prioridade']) {
    return this.filteredTasks.filter(t => t.prioridade === prioridade);
  }

  concluirTask(task: Task) {
    task.concluida = true;
    this.taskService.atualizarTask(task);
    this.reloadTasks();
  }

  desfazerConclusao(task: Task) {
    task.concluida = false;
    this.taskService.atualizarTask(task);
    this.reloadTasks();
  }

  get tasksConcluidas(): Task[] {
    this.totalConcluidas = this.tasks.filter(t => t.concluida).length;
    return this.tasks.filter(t => t.concluida);
  }

  get filteredTasks(): Task[] {
    return this.tasks.filter(t =>
      !t.concluida && (this.filtro === 'todas' || t.prioridade === this.filtro)
    );
  }


}
