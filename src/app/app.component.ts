import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TaskKanbanComponent } from './components/task-kanban/task-kanban.component';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackComponent } from './shared/feedback/feedback.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    TaskListComponent,
    TaskKanbanComponent,
    CommonModule,
    FormsModule,
    MatButtonToggleModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  modoKanban: boolean = false;

  title = 'taskFlow';

  ngOnInit() {
    const savedMode = localStorage.getItem('modoKanban');
    this.modoKanban = savedMode === 'true';
  }

  alternarModoKanban(valor: boolean) {
    this.modoKanban = valor;
    localStorage.setItem('modoKanban', String(this.modoKanban));
  }

  abrirFeedbackDialog(): void {
    this.dialog.open(FeedbackComponent, {
      width: '400px',
      disableClose: false,
    });
  }


}
