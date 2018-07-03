import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarColaboradorComponent } from './adicionar-colaborador.component';

describe('AdicionarColaboradorComponent', () => {
  let component: AdicionarColaboradorComponent;
  let fixture: ComponentFixture<AdicionarColaboradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarColaboradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
