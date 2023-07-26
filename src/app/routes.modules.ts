import { Route } from '@angular/router';
import { ProductComponent } from './product/product.component';

export const productsRoutes: Route[] = [
  {
    path: 'product/:category',
    component: ProductComponent,
  },
];