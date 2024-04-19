import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTotalCardComponent } from './resume-total-card.component';

describe('ResumeTotalCardComponent', () => {
  let component: ResumeTotalCardComponent;
  let fixture: ComponentFixture<ResumeTotalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeTotalCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeTotalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
