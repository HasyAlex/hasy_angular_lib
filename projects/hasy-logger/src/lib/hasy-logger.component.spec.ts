import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasyLoggerComponent } from './hasy-logger.component';

describe('HasyLoggerComponent', () => {
  let component: HasyLoggerComponent;
  let fixture: ComponentFixture<HasyLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HasyLoggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HasyLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
