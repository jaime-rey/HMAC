import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomComponente2Component } from './nom-componente2.component';

describe('NomComponente2Component', () => {
  let component: NomComponente2Component;
  let fixture: ComponentFixture<NomComponente2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NomComponente2Component]
    });
    fixture = TestBed.createComponent(NomComponente2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
