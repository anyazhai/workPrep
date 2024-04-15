import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];
  allowEdit = false

  constructor(private serversService: ServersService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReloadServers(){
    // this.router.navigate(['servers'], {relativeTo: this.route}); //to enable relative routing 
    // i.e., this code will try to go to /servers/servers
  }

}
