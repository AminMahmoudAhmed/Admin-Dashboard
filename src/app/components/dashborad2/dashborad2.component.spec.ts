import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashborad2Component } from './dashborad2.component';

describe('Dashborad2Component', () => {
  let component: Dashborad2Component;
  let fixture: ComponentFixture<Dashborad2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashborad2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashborad2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
