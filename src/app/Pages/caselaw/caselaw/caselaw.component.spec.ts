import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaselawComponent } from './caselaw.component';

describe('CaselawComponent', () => {
  let component: CaselawComponent;
  let fixture: ComponentFixture<CaselawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaselawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaselawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
