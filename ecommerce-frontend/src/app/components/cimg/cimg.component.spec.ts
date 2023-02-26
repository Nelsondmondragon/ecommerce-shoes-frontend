import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CimgComponent } from './cimg.component';

describe('CimgComponent', () => {
  let component: CimgComponent;
  let fixture: ComponentFixture<CimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CimgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
