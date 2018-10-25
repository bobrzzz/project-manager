import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProjectPanelComponent } from './all-project-panel.component';

describe('AllProjectPanelComponent', () => {
  let component: AllProjectPanelComponent;
  let fixture: ComponentFixture<AllProjectPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProjectPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProjectPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
