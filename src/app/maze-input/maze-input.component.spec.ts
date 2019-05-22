import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MazeInputComponent } from './maze-input.component';

describe('MazeInputComponent', () => {
  let component: MazeInputComponent;
  let fixture: ComponentFixture<MazeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MazeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MazeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
