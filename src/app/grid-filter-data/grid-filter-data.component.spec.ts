import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFilterDataComponent } from './grid-filter-data.component';

describe('GridFilterDataComponent', () => {
  let component: GridFilterDataComponent;
  let fixture: ComponentFixture<GridFilterDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridFilterDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridFilterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
