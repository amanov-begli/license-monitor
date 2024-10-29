import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoudiniComponent } from './houdini.component';

describe('HoudiniComponent', () => {
  let component: HoudiniComponent;
  let fixture: ComponentFixture<HoudiniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoudiniComponent]
    });
    fixture = TestBed.createComponent(HoudiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
