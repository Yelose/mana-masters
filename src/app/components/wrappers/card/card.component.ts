import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
  <div>
    <ng-content></ng-content>
  </div>
`,
  styles: [`
  div {
    background-color: white;
    border-radius: 10px;
  }
`]
})
export class CardComponent {}
