import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'shop', loadComponent: () => import('./shop/shop.component').then(m => ShopComponent) },
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => LoginComponent) },
  { path: 'contacts', loadComponent: () => import('./contacts/contacts.component').then(m => ContactsComponent) },
  { path: 'cart', loadComponent: () => import('./cart/cart.component').then(m => CartComponent) }
];
