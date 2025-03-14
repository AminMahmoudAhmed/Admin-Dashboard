import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashborad1Component } from './dashborad1.component';

describe('Dashborad1Component', () => {
  let component: Dashborad1Component;
  let fixture: ComponentFixture<Dashborad1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashborad1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashborad1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
