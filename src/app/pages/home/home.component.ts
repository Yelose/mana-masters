import { Component } from '@angular/core';
import { ManaCardComponent } from '../../components/cards/mana-card/mana-card.component';
import { CharacterCardComponent } from '../../components/cards/character-card/character-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ManaCardComponent, CharacterCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // manaCard: ManaCard = {
  //   id: 0,
  //   name: '',
  //   manaCost: 0,
  //   manaProvided: 0,
  //   type: 'Mana'
  // }
  // characterCard: CharacterCard = {
  //   id: 0,
  //   name: '',
  //   manaCost: 0,
  //   attack: 0,
  //   defense: 0,
  //   type: 'Character'
  // }

}
