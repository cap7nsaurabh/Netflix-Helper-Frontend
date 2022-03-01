import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlaterComponent } from './watchlater.component';

describe('WatchlaterComponent', () => {
  let component: WatchlaterComponent;
  let fixture: ComponentFixture<WatchlaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchlaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
