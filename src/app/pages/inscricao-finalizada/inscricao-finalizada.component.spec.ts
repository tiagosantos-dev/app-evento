import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscricaoFinalizadaComponent } from './inscricao-finalizada.component';

describe('InscricaoFinalizadaComponent', () => {
  let component: InscricaoFinalizadaComponent;
  let fixture: ComponentFixture<InscricaoFinalizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscricaoFinalizadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscricaoFinalizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
