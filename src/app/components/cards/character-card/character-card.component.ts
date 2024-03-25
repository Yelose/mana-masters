import { Component, Input } from '@angular/core';
import { CharacterCardModel } from '../../../models/card-model';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss'
})
export class CharacterCardComponent {
  @Input() card!: CharacterCardModel;

}
