import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { } //dependency injection

  ngOnInit() {
  }

  onLoadServers(id: number){
    //complex prepossing stuff
    //this.router.navigate(['/servers']);

    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'}); 
    // http://localhost:4200/servers/1/edit?allowEdit=1#loading

  }
}
