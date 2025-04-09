import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions,  MatDialogModule, MatDialogRef, } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogActions,
    MatDialogModule,
    MatInput,
    FormsModule
  ]
})
export class FeedbackComponent {
  constructor(private dialogRef: MatDialogRef<FeedbackComponent>) { }

  tipo = '';
  mensagem = '';
  email = '';
  nome = '';


enviarFeedback() {
  const formData = new FormData();
  formData.append('entry.2102785088', this.tipo);       
  formData.append('entry.546338168', this.mensagem);
  formData.append('entry.688667291', this.nome);        
  formData.append('entry.1116652071', this.email);        

  fetch('https://docs.google.com/forms/d/e/1FAIpQLSf4pe-X_8s72Wd62HEF_ioMFQrgpzzqzN9sgA5TVBYO1tO5hA/formResponse', {
    method: 'POST',
    mode: 'no-cors',
    body: formData,
  }).then(() => {
    alert('✅ Feedback enviado com sucesso!');
  }).catch(() => {
    alert('❌ Erro ao enviar feedback.');
  });

  this.dialogRef.close();
}

}
