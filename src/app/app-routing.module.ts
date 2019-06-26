import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { UsersResolver } from './users-list/resolvers';


export const routes: Routes = [
{
  path: '',
  redirectTo: 'users',
  pathMatch: 'full'
},
{
  path: 'users',
  loadChildren: '../app/users-list/users-list.module#UsersListModule',
  resolve: {users: UsersResolver}
},
{
  path: 'user',
  loadChildren: '../app/user/user.module#UserModule'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
