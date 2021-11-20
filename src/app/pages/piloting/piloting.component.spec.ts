import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotingComponent } from './piloting.component';

describe('PilotingComponent', () => {
  let component: PilotingComponent;
  let fixture: ComponentFixture<PilotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
