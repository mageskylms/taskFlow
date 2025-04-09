import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private readonly key = 'taskflow_tasks';

  pegarTasks(): Task[] {
    if (typeof window !== 'undefined' && localStorage.getItem('taskflow_tasks')) {
      return JSON.parse(localStorage.getItem(this.key)!) || [];
    }
    return [];
  }

  salvarTasks(tasks: Task[]) {
    localStorage.setItem(this.key, JSON.stringify(tasks));
  }

  criarTask(task: Task) {
    const tasks = this.pegarTasks();
    tasks.push(task);
    this.salvarTasks(tasks);
  }

  excluirTask(id: string) {
    const tasks = this.pegarTasks().filter(t => t.id !== id);
    this.salvarTasks(tasks);
  }

  atualizarTask(taskAtualizada: Task): void {
    const tarefas = this.pegarTasks();
    const index = tarefas.findIndex(t => t.id === taskAtualizada.id);

    if (index !== -1) {
      tarefas[index] = taskAtualizada;
      localStorage.setItem(this.key, JSON.stringify(tarefas));
    }
  }

}
