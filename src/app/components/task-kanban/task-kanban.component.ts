import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { CdkDragDrop, moveItemInArray, transferArrayItem, DragDropModule } from '@angular/cdk/drag-drop';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service.service';
import { CommonModule } from '@angular/common';
import { DialogNovaTaskComponent } from '../../shared/dialog-nova-task/dialog-nova-task.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-kanban',
  imports: [MatDialogModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatSelectModule,
    DragDropModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './task-kanban.component.html',
  styleUrl: './task-kanban.component.css'
})
export class TaskKanbanComponent {

  readonly dialog = inject(MatDialog);
  readonly prioridades: Task['prioridade'][] = ['alta', 'média', 'baixa'];
  tasks: Task[] = [];
  filtro: Task['prioridade'] | 'todas' = 'todas';
  mostrarConcluidas = false;
  totalConcluidas: number = 0;
  modoKanban: boolean = false;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.reloadTasks();
  }

  novaTask(): void {
    const dialogRef = this.dialog.open(DialogNovaTaskComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.reloadTasks();
      }
    });
  }

  get tarefasPendentes() {
    return this.tasks.filter(task => !task.concluida);
  }

  get tarefasConcluidas() {
    return this.tasks.filter(task => task.concluida);
  }

  moverTarefa(event: CdkDragDrop<Task[]>) {
    
    if (event.previousContainer === event.container) {
      console.log('Arrastou dentro da mesma lista');
      return;
    }

    const task = event.previousContainer.data[event.previousIndex];

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      task.concluida = !task.concluida;
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.taskService.atualizarTask(task);
    }

  }

  removeTask(id: string) {
    this.taskService.excluirTask(id);
    this.tasks = this.taskService.pegarTasks();
  }

  reloadTasks() {
    this.tasks = this.taskService.pegarTasks();
  }

}
