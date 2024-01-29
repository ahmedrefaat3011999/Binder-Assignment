import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToWishComponent } from './add-to-wish.component';

describe('AddToWishComponent', () => {
  let component: AddToWishComponent;
  let fixture: ComponentFixture<AddToWishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToWishComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddToWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
