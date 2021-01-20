import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { LogoutService } from './service/logout.service';
import { TodoComponent } from './todo/todo.component';
import { UpdatetodoComponent } from './updatetodo/updatetodo.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent, canActivate: [LogoutService] },
  { path: 'todos', component: TodoComponent, canActivate: [LogoutService] },
  { path: 'logout', component: LogoutComponent, canActivate: [LogoutService] },
  { path: 'todos/:id', component: UpdatetodoComponent, canActivate: [LogoutService] },
  { path: '**', component: ErrorpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRouts = [
  LoginComponent, WelcomeComponent, TodoComponent, ErrorpageComponent
]