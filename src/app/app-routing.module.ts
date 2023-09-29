import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserDetailComponent } from './components/user/user-detail.component';
import { UserAddComponent } from './components/user/user-add.component';
import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent },
{path: 'user/:id', component: UserDetailComponent},
//{path: 'add', component: UserAddComponent},
{path : 'add', component: AddUserComponent},
{ path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
