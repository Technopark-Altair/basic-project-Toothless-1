import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { ContentComponent } from './content/content.component';
import { Task1Component } from './task1/task1.component';
import { Num1Component } from './num1/num1.component';
import { FormsModule } from '@angular/forms';
import { Num4Component } from './num4/num4.component';
import { Page2Component } from './page2/page2.component';
import { AboutProjectComponent } from './about-project/about-project.component';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent,
    ContentComponent,
    Task1Component,
    Num1Component,
    Num4Component,
    Page2Component,
    AboutProjectComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
