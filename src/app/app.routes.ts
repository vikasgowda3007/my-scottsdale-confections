import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Menu } from './pages/menu/menu';
import { Parties } from './pages/parties/parties';
import { Volunteer } from './pages/volunteer/volunteer';
import { Contact } from './pages/contact/contact';
import { ThankYou } from './pages/thank-you/thank-you';

export const routes: Routes = [
  { path: '', component: Home, title: 'My Scottsdale Confections • Home' },
  { path: 'menu', component: Menu, title: 'Menu • My Scottsdale Confections' },
  { path: 'parties', component: Parties, title: 'Parties • My Scottsdale Confections' },
  { path: 'volunteer', component: Volunteer, title: 'Stories & Volunteers • My Scottsdale Confections' },
  { path: 'contact', component: Contact, title: 'Contact • My Scottsdale Confections' },
  { path: 'thank-you', component: ThankYou, title: 'Thank you • My Scottsdale Confections' },
  { path: '**', redirectTo: '' }
];
