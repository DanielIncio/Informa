import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcmtrsComponent } from './ccmtrs.component';

describe('CcmtrsComponent', () => {
  let component: CcmtrsComponent;
  let fixture: ComponentFixture<CcmtrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcmtrsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcmtrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
