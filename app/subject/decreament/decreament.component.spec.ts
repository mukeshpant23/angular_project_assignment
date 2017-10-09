import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecreamentComponent } from './decreament.component';

describe('DecreamentComponent', () => {
  let component: DecreamentComponent;
  let fixture: ComponentFixture<DecreamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecreamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecreamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
