import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashborad3Component } from './dashborad3.component';

describe('Dashborad3Component', () => {
  let component: Dashborad3Component;
  let fixture: ComponentFixture<Dashborad3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashborad3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashborad3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
