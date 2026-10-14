import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpmcosComponent } from './cpmcos.component';

describe('CpmcosComponent', () => {
  let component: CpmcosComponent;
  let fixture: ComponentFixture<CpmcosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpmcosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpmcosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
