import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `    
    <div style="text-align:center" class="content">
      <h1>
        Welcome to Vitalii Vyhonskyi website!
      </h1>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
}
