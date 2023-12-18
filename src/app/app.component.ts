import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projek-angularku';
  // menuMakanan =["bakso", "pecel"]
   menuMakanan =[
    {
      namaMakanan :"Bakso",
      harga : 2000,
    },
    {
      namaMakanan :"Pecel",
      harga : 5000,
    },
    {
      namaMakanan :"Mie Ayam",
      harga : 15000,
    },
    {
      namaMakanan :"Ayam Goreng",
      harga : 10000,
    },
   ]

   isRed : boolean = true;

   changeColorList(){
     this.isRed = !this.isRed;
   }
}
