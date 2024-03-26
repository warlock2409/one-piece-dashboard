import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseStationComponent } from './base-station.component';

describe('BaseStationComponent', () => {
  let component: BaseStationComponent;
  let fixture: ComponentFixture<BaseStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseStationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaseStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
