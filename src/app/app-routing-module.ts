import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./routingex/home/home.component";
import { UsersComponent } from "./routingex/users/users.component";
import { EditServerComponent } from "./routingex/servers/edit-server/edit-server.component";
import { ServerComponent } from "./routingex/servers/server/server.component";
import { ServersComponent } from "./routingex/servers/servers.component";
import { UserComponent } from "./routingex/users/user/user.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ] },
    { path: 'servers', component: ServersComponent, children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent }
    ] },  
    { path: 'not-found', component: PageNotFoundComponent},
    { path: '**', redirectTo: '/not-found' }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}