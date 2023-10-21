import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetApiComponent } from './set-api.component';

describe('SetApiComponent', () => {
  let component: SetApiComponent;
  let fixture: ComponentFixture<SetApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetApiComponent]
    });
    fixture = TestBed.createComponent(SetApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
