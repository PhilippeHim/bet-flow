import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Match } from '../../api/match.model';
import { MatchApiService } from '../../api/match-api.service';
import { ModalPariComponent } from '../../components/modal-pari/modal-pari.component';

@Component({
  selector: 'app-paris',
  standalone: true,
  imports: [CommonModule, ModalPariComponent],
  templateUrl: './paris.component.html',
  styleUrls: ['./paris.component.scss']
})
export class ParisComponent implements OnInit {
  featuredMatches: Match[] = [];
  allMatches: Match[] = [];
  showModal = false;
  selectedMatch?: Match;

  paris: { match: Match; team: string; amount: number }[] = [];

  constructor(private matchService: MatchApiService) {}

  ngOnInit(): void {
    this.matchService.getFeaturedMatches(3).subscribe(matches => this.featuredMatches = matches);
    this.matchService.getAllMatches().subscribe(matches => this.allMatches = matches);
  }

  ouvrirModal(match: Match) {
    this.selectedMatch = match;
    this.showModal = true;
  }

  enregistrerPari(pari: { team: string; amount: number }) {
    if (this.selectedMatch) {
      this.paris.push({
        match: this.selectedMatch,
        team: pari.team,
        amount: pari.amount
      });
    }
    this.showModal = false;
  }

  get montantTotalParie(): number {
    return this.paris.reduce((total, p) => total + p.amount, 0);
  }
}
