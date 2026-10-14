import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcmvenComponent } from './ccmven.component';

describe('CcmvenComponent', () => {
  let component: CcmvenComponent;
  let fixture: ComponentFixture<CcmvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcmvenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcmvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
