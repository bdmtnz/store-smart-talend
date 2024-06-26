import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecommenderComponent } from './user-recommender.component';

describe('UserRecommenderComponent', () => {
  let component: UserRecommenderComponent;
  let fixture: ComponentFixture<UserRecommenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRecommenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserRecommenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
