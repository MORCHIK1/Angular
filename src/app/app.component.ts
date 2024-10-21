import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // For routing
import { NavbarComponent } from './navbar/navbar.component';  // Import the NavbarComponent

@Component({
  selector: 'app-root',
  standalone: true,  // Mark this as a standalone component
  imports: [RouterModule, NavbarComponent],  // Add NavbarComponent to the imports array
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shopping-app';
}
