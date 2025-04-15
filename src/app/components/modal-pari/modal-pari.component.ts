import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-pari',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-pari.component.html',
  styleUrls: ['./modal-pari.component.scss']
})
export class ModalPariComponent {
  @Input() teamA!: string;
  @Input() teamB!: string;
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() submitBet = new EventEmitter<{ team: string; amount: number }>();

  selectedTeam: string = '';
  betAmount: number = 0;

  envoyerPari() {
    if (this.selectedTeam && this.betAmount > 0) {
      this.submitBet.emit({ team: this.selectedTeam, amount: this.betAmount });
      this.close.emit(); // ferme la modale après envoi
    }
  }
}
