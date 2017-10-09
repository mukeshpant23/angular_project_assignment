import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAddEditComponent } from './recipe-add-edit.component';

describe('RecipeAddEditComponent', () => {
  let component: RecipeAddEditComponent;
  let fixture: ComponentFixture<RecipeAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
