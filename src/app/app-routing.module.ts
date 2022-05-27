import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './public/auth/auth.component';
import { HomeComponent } from './public/home/home.component';
import { AuthenticationGuard } from './shared/auth/guard/authentication.guard';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "auth", component: AuthComponent },
  { path: "dashboard", loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule), canActivateChild: [AuthenticationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
