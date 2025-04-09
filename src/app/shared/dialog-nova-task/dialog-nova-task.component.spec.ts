import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNovaTaskComponent } from './dialog-nova-task.component';

describe('DialogNovaTaskComponent', () => {
  let component: DialogNovaTaskComponent;
  let fixture: ComponentFixture<DialogNovaTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogNovaTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNovaTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
