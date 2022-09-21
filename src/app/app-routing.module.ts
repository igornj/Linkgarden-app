import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GardensComponent } from './views/gardens/gardens.component';
import { HomeComponent } from './views/homepage/home.component';
import { LoginComponent } from './views/loginpage/login.component';
import { RegisterComponent } from './views/registerpage/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'my-gardens', component: GardensComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
