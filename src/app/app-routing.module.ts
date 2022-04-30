import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { LoginFormComponent } from './public/login-form/login-form.component';
import { AuthenticationGuard } from './shared/auth/guard/authentication.guard';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginFormComponent },
  { path: "dashboard", loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule), canActivateChild: [AuthenticationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
