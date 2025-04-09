import { Component, OnInit } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TaskKanbanComponent } from './components/task-kanban/task-kanban.component';

@Component({
  selector: 'app-root',
  imports: [
    TaskListComponent,
    TaskKanbanComponent,
    CommonModule,
    FormsModule,
    MatButtonToggleModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  modoKanban: boolean = false;

  ngOnInit() {
    const savedMode = localStorage.getItem('modoKanban');
    this.modoKanban = savedMode === 'true';
  }
  
  alternarModoKanban(valor: boolean) {
    this.modoKanban = valor;
    localStorage.setItem('modoKanban', String(this.modoKanban));
  }

  title = 'taskFlow';

}
