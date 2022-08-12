import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiEstadoComponent } from './mi-estado.component';

describe('MiEstadoComponent', () => {
  let component: MiEstadoComponent;
  let fixture: ComponentFixture<MiEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiEstadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
