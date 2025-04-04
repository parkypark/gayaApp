import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantPage } from './Restaurant.page';

describe('Tab1Page', () => {
  let component: RestaurantPage;
  let fixture: ComponentFixture<RestaurantPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(RestaurantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
