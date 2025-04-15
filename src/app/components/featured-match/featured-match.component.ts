import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchApiService } from '../../api/match-api.service';
import { Match } from '../../api/match.model';
import { ModalPariComponent } from '../modal-pari/modal-pari.component'; // à adapter selon le bon chemin

@Component({
  selector: 'app-featured-match',
  standalone: true,
  imports: [CommonModule, ModalPariComponent],
  templateUrl: './featured-match.component.html',
  styleUrls: ['./featured-match.component.scss']
})
export class FeaturedMatchComponent implements OnInit {
  featuredMatches: Match[] = [];

  showModal = false;
  selectedMatch?: Match;

  constructor(private matchService: MatchApiService) {}

  ngOnInit(): void {
    this.matchService.getFeaturedMatches(3).subscribe((matches: Match[]) => {
      this.featuredMatches = matches;
    });
  }

  ouvrirModal(match: Match) {
    this.selectedMatch = match;
    this.showModal = true;
  }

  traiterPari(pari: { team: string; amount: number }) {
    console.log('Pari effectué :', pari);
    // TODO : envoyer vers backend ou enregistrer le pari
    this.showModal = false;
  }
}
