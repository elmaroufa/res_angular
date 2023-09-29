import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { UserDetailComponent } from './components/user/user-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAddComponent } from './components/user/user-add.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { NoimagePipe } from './pipes/noimage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    UserDetailComponent,
    UserAddComponent,
    AddUserComponent,
    LoadingComponent,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 1500 }
      ),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
