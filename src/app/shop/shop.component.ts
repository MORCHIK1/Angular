import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-shop',
  standalone: true,  // Mark as standalone
  imports: [CommonModule],  // Include CommonModule
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  swords = [
    { name: 'Excalibur', price: 500 },
    { name: 'Katana', price: 300 },
    { name: 'Broadsword', price: 450 },
    { name: 'Rapier', price: 250 }
  ];

  addToCart(sword: any) {
    // Implement the logic to add the sword to the cart
    console.log(`Added ${sword.name} to the cart.`);
  }
}
