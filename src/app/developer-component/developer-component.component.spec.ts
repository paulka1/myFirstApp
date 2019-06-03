import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperComponentComponent } from './developer-component.component';

describe('DeveloperComponentComponent', () => {
  let component: DeveloperComponentComponent;
  let fixture: ComponentFixture<DeveloperComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
