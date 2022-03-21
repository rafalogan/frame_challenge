import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginlTextComponent } from './originl-text.component';

describe('OriginlTextComponent', () => {
  let component: OriginlTextComponent;
  let fixture: ComponentFixture<OriginlTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OriginlTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginlTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
