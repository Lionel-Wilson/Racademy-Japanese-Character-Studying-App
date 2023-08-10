import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyComponent } from './study.component';

describe('StudyComponent', () => {
  let component: StudyComponent;
  let fixture: ComponentFixture<StudyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudyComponent]
    });
    fixture = TestBed.createComponent(StudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
