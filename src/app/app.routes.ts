import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FeaturedMatchComponent } from './components/featured-match/featured-match.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'matches', component: FeaturedMatchComponent }
];
