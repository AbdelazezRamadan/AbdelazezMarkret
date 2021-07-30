import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritrComponent } from './favouritr.component';

describe('FavouritrComponent', () => {
  let component: FavouritrComponent;
  let fixture: ComponentFixture<FavouritrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouritrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
