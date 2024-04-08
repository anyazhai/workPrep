import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter<string>(); //to emit something to the parent element on click. 
  //"(toggle)" should be used in html to capture the emited data on parent like <app-header (toggle)="">
  
  onRecipeToggle(){
    this.toggle.emit('recipe')
  }
  onShoppingToggle(){
    this.toggle.emit('shopping')
  }
}
