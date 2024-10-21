import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-cart',
  standalone: true,  // Mark as standalone
  imports: [CommonModule],  // Include CommonModule
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = []; // Array to hold cart items

  clearCart() {
    this.cartItems = []; // Clear all items in the cart
    alert('Cart cleared!');
  }
}
