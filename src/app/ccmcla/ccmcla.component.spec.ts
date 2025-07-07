import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcmclaComponent } from './ccmcla.component';

describe('CcmclaComponent', () => {
  let component: CcmclaComponent;
  let fixture: ComponentFixture<CcmclaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcmclaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcmclaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
