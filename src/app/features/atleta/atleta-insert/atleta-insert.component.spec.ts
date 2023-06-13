import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletaInsertComponent } from './atleta-insert.component';

describe('AtletaInsertComponent', () => {
  let component: AtletaInsertComponent;
  let fixture: ComponentFixture<AtletaInsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtletaInsertComponent]
    });
    fixture = TestBed.createComponent(AtletaInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
