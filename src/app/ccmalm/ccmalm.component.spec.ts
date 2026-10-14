import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcmalmComponent } from './ccmalm.component';

describe('CcmalmComponent', () => {
  let component: CcmalmComponent;
  let fixture: ComponentFixture<CcmalmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcmalmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcmalmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
