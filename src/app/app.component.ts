import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Milk-In-Minutes';
  constructor(private router: Router) {}

  isDairyProductOrdersRoute(): boolean {
    return (
      this.router.url.includes('dairy-product-orders') ||
      this.router.url.includes('login')
    );
  }
}