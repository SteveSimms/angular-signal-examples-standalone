import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutateApiComponent } from './mutate-api.component';

describe('MutateApiComponent', () => {
  let component: MutateApiComponent;
  let fixture: ComponentFixture<MutateApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MutateApiComponent]
    });
    fixture = TestBed.createComponent(MutateApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
