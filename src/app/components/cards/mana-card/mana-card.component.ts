import { Component, Input } from '@angular/core';
import { ManaCardModel } from '../../../models/card-model';

@Component({
  selector: 'app-mana-card',
  standalone: true,
  imports: [],
  templateUrl: './mana-card.component.html',
  styleUrl: './mana-card.component.scss'
})
export class ManaCardComponent {
@Input() card!: ManaCardModel

}
