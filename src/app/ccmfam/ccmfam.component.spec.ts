import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcmfamComponent } from './ccmfam.component';

describe('CcmfamComponent', () => {
  let component: CcmfamComponent;
  let fixture: ComponentFixture<CcmfamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcmfamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcmfamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
