import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRigthComponent } from './product-rigth.component';

describe('ProductRigthComponent', () => {
  let component: ProductRigthComponent;
  let fixture: ComponentFixture<ProductRigthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ProductRigthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRigthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
