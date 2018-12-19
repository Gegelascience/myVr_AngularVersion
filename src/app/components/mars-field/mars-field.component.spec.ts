import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsFieldComponent } from './mars-field.component';

describe('MarsFieldComponent', () => {
  let component: MarsFieldComponent;
  let fixture: ComponentFixture<MarsFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
