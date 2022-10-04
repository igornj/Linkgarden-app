import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGardenComponent } from './views/creategarden/creategarden.component';
import { HomeComponent } from './views/homepage/home.component';
import { LoginComponent } from './views/loginpage/login.component';
import { MainComponent } from './views/main/main.component';
import { RegisterComponent } from './views/registerpage/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create-gardens', component: CreateGardenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
