# ManaMasters

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

## Game Description

ManaMasters is a trading card game where players become masters of mana and engage in strategic magical battles. Players construct decks, deploy creatures, cast spells, and manage their mana resources to defeat opponents. The game features a single-player mode where players face off against challenging AI opponents. ManaMasters is built with Angular for the frontend, SCSS for styling, and TypeScript for programming logic.

---

## Game Rules

**Objective of the game:**
The objective of "Mana Masters" is to defeat the opponent by reducing their life points to zero. Players use cards to summon creatures, and manage their mana while attempting to overcome the opponent's defenses and attack directly.

**Components of the game:**
- A customized deck of cards for each player, containing creatures, spells, and mana cards.
- A life counter for each player, representing their life points.

**Preparation:**
1. Each player shuffles their deck and places it face down in front of them.
2. Each player draws an initial hand of cards, ensuring they have at least 3 cards in hand.
3. Randomly determine who will start the game.

**Gameplay:**
1. **Draw phase:** At the beginning of their turn, the player draws a card from the deck. If they have no cards in hand, they draw three cards instead.
2. **Mana phase:** The player gains one mana point at the beginning of their turn. Mana accumulates throughout the game and is used to play cards.
3. **Card playing phase:** During their turn, the player can play cards from their hand by paying their mana cost. They can summon creatures to defend or attack, cast spells to affect the game in some way, or play mana cards to increase their mana pool.
4. **Attack phase:** After playing cards, the player can choose to attack with the creatures they have on the battlefield. Creatures can attack the opponent directly or attack the opponent's creatures on the battlefield.
5. **Defense phase:** If the opponent attacked during their turn, the player can choose to defend with the creatures on their battlefield. Defender creatures block the attack and may suffer damage in the process.
6. **End of turn phase:** The player ends their turn, and the game moves to the next player.

**End of the game:**
The game continues alternating between players until one of them reduces the opponent's life points to zero. The player who achieves this objective is declared the winner.

---
