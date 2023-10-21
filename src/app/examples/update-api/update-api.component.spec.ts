import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApiComponent } from './update-api.component';

describe('UpdateApiComponent', () => {
  let component: UpdateApiComponent;
  let fixture: ComponentFixture<UpdateApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateApiComponent]
    });
    fixture = TestBed.createComponent(UpdateApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
