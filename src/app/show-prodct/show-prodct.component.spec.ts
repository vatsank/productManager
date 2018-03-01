import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProdctComponent } from './show-prodct.component';

describe('ShowProdctComponent', () => {
  let component: ShowProdctComponent;
  let fixture: ComponentFixture<ShowProdctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProdctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProdctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
