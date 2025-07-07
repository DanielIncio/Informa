import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcmtptComponent } from './ccmtpt.component';

describe('CcmtptComponent', () => {
  let component: CcmtptComponent;
  let fixture: ComponentFixture<CcmtptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcmtptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcmtptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
