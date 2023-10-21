import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceRxjsSubjectComponent } from './replace-rxjs-subject.component';

describe('ReplaceRxjsSubjectComponent', () => {
  let component: ReplaceRxjsSubjectComponent;
  let fixture: ComponentFixture<ReplaceRxjsSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReplaceRxjsSubjectComponent]
    });
    fixture = TestBed.createComponent(ReplaceRxjsSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
