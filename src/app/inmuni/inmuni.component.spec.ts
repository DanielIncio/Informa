import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuniComponent } from './inmuni.component';

describe('InmuniComponent', () => {
  let component: InmuniComponent;
  let fixture: ComponentFixture<InmuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InmuniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
