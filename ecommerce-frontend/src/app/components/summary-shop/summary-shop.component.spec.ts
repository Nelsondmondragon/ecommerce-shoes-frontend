import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryShopComponent } from './summary-shop.component';

describe('SummaryShopComponent', () => {
  let component: SummaryShopComponent;
  let fixture: ComponentFixture<SummaryShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
