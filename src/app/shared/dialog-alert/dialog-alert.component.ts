import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-alert',
  imports: [MatDialogModule],
  templateUrl: './dialog-alert.component.html',
  styleUrl: './dialog-alert.component.css'
})

export class DialogAlertComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string, message: string }) { }
}
