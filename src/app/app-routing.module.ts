import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutProjectComponent } from './about-project/about-project.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContentComponent } from './content/content.component';
import { Num1Component } from './num1/num1.component';
import { Num4Component } from './num4/num4.component';
import { Page2Component } from './page2/page2.component';
import { Task1Component } from './task1/task1.component';

const routes: Routes = [
  {path: 'task1', component: Task1Component},
  {path: '', component: ContentComponent},
  {path: 'num1', component: Num1Component},
  {path: 'num4', component: Num4Component},
  {path: 'page2', component: Page2Component},
  {path: 'aboutproject', component: AboutProjectComponent},
  {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
