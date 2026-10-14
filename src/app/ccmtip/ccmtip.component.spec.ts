import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcmtipComponent } from './ccmtip.component';

describe('CcmtipComponent', () => {
  let component: CcmtipComponent;
  let fixture: ComponentFixture<CcmtipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcmtipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcmtipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
