import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';


const routes: Route[] = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "login", component: LoginComponent },
  // { path: "Volunteer", component: VolunteerListComponent },
  // { path: "Volunteer/:volunteerId", component: VolunteerDetailsComponent },
  // { path: "Scheduling", component: SchedulingComponent },
  // { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
