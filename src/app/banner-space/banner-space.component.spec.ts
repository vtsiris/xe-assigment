import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSpaceComponent } from './banner-space.component';

describe('BannerSpaceComponent', () => {
  let component: BannerSpaceComponent;
  let fixture: ComponentFixture<BannerSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
