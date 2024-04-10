import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    //observables help to work with asynchronous tasks
    //here it's used to observe any changes that happens to the route parameters from within the page itself 
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params ) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe(); //angular does this behind the scenes but it'll be better to mention it ourselves
    
    //if the subscription isn't destroyed when the component is destroyed then it'll keep on living in the memory and a new subscription is creation everytime the component is revisited(created)
  }

}
