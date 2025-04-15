import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-featured-match',
  imports: [CommonModule],
  templateUrl: './featured-match.component.html',
  styleUrl: './featured-match.component.scss'
})
export class FeaturedMatchComponent {
  featuredMatches = [
    { teamA: 'Équipe A', teamB: 'Équipe B' },
    { teamA: 'Équipe C', teamB: 'Équipe D' },
    { teamA: 'Équipe E', teamB: 'Équipe F' }
    ];

}


import { Component, OnInit } from '@angular/core';
import { MatchApiService } from '../services/match-api.service';
import { Match } from '../models/match.model';

@Component({
  selector: 'app-featured-match',
  templateUrl: './featured-match.component.html',
  styleUrls: ['./featured-match.component.scss']
})
export class FeaturedMatchComponent implements OnInit {
  featuredMatches: Match[] = [];

  constructor(private matchService: MatchApiService) {}

  ngOnInit(): void {
    this.matchService.getFeaturedMatches(3).subscribe((matches) => {
      this.featuredMatches = matches;
    });
  }
}
