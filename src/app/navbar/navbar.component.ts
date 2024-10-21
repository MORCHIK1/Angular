import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule for navigation

@Component({
  selector: 'app-navbar',
  standalone: true,  // Make it standalone
  imports: [RouterModule],  // Import RouterModule in the component itself
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent { }
