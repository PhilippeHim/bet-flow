import { Component } from '@angular/core';
import { FeaturedMatchComponent } from "../../components/featured-match/featured-match.component";

@Component({
  selector: 'app-home',
  imports: [FeaturedMatchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
