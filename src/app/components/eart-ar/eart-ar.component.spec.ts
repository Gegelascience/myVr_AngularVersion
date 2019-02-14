import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EartArComponent } from './eart-ar.component';

describe('EartArComponent', () => {
  let component: EartArComponent;
  let fixture: ComponentFixture<EartArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EartArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EartArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
