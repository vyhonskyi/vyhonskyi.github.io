import { Component } from '@angular/core';
import { trigger, state, transition, animate, style, query } from '@angular/animations';

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
      })),
      transition('collapsed => expanded', [
        style({
          display: 'block',
          height: 0
        }),
        query('ul', style({ display: 'none' })),
        animate('0.1s', style({ height: '*' }))
      ]),
      transition('expanded => collapsed', [
        query('ul', style({ display: 'none' })),
        animate('0.1s', style({ height: 0 }))
      ])
    ])
  ]
})
export class AppComponent {
  public navbarExpanded: boolean;

  public toggleNavbar(): void {
    this.navbarExpanded = !this.navbarExpanded;
  }

  public closeNavbar(): void {
    this.navbarExpanded = false;
  }

}
