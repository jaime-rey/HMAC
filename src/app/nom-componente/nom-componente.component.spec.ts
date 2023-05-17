import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomComponenteComponent } from './nom-componente.component';

describe('NomComponenteComponent', () => {
  let component: NomComponenteComponent;
  let fixture: ComponentFixture<NomComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NomComponenteComponent]
    });
    fixture = TestBed.createComponent(NomComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
