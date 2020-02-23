import { Component } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('navbarCollapsedExpanded', [
      state('collapsed', style({
        display: 'none'
      })),
      state('expanded', style({
        display: 'block'
      }))
    ])
  ]
})
export class AppComponent {
  public navbarExpanded: boolean;

  public toggleNavbar(): void {
    this.navbarExpanded = !this.navbarExpanded;
  }
}
