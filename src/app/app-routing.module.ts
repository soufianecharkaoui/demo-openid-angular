import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthorizationGuard } from './shared/auth.guard.service';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "user", component: UserComponent, canActivate: [AuthorizationGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
