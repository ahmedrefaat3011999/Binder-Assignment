import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreadCrumbComponent } from './cread-crumb.component';

describe('CreadCrumbComponent', () => {
  let component: CreadCrumbComponent;
  let fixture: ComponentFixture<CreadCrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreadCrumbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreadCrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
