import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreamentComponent } from './increament.component';

describe('IncreamentComponent', () => {
  let component: IncreamentComponent;
  let fixture: ComponentFixture<IncreamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncreamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
