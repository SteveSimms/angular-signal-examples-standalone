import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputeApiComponent } from './compute-api.component';

describe('ComputeApiComponent', () => {
  let component: ComputeApiComponent;
  let fixture: ComponentFixture<ComputeApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComputeApiComponent]
    });
    fixture = TestBed.createComponent(ComputeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
