import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  { path: "login", component: LoginFormComponent },
  { path: "dashboard", loadChildren: () => import("../dashboard/dashboard.module").then(m => m.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }