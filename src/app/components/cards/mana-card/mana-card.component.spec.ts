import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManaCardComponent } from './mana-card.component';

describe('ManaCardComponent', () => {
  let component: ManaCardComponent;
  let fixture: ComponentFixture<ManaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManaCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
