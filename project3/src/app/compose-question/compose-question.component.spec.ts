import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeQuestionComponent } from './compose-question.component';

describe('ComposeQuestionComponent', () => {
  let component: ComposeQuestionComponent;
  let fixture: ComponentFixture<ComposeQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
