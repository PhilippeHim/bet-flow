import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPariComponent } from './modal-pari.component';

describe('ModalPariComponent', () => {
  let component: ModalPariComponent;
  let fixture: ComponentFixture<ModalPariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPariComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
