import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalhesTaskComponent } from './dialog-detalhes-task.component';

describe('DialogDetalhesTaskComponent', () => {
  let component: DialogDetalhesTaskComponent;
  let fixture: ComponentFixture<DialogDetalhesTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogDetalhesTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDetalhesTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
