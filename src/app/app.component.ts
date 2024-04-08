import { Component } from '@angular/core';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  recipetab:boolean = true;
  shoppingtab:boolean;
  onToggle(e:any){ //e is received from the output emitter from header component  
    if(e == "recipe"){
      this.recipetab = true
      this.shoppingtab = false
    } else if(e == "shopping"){
      this.recipetab = false
      this.shoppingtab = true
    }
  }
}
