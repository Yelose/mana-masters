export interface CardModel {
  id: number;
  name: string;
  type: 'Character' | 'Mana';  // Usamos tipos literales aquí
  manaCost: number;
}


export class CharacterCardModel implements CardModel {
  id!: number;
  name!: string;
  type: 'Character' = 'Character';
  manaCost!: number;
  attack!: number;
  defense!: number;
}

export class ManaCardModel implements CardModel {
  id!: number;
  name!: string;
  type: 'Mana' = 'Mana';
  manaCost!: number;
  manaProvided!: number;
}
