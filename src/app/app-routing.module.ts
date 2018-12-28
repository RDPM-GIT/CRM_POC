import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicketsComponent } from './ui/ticket/tickets.component';

const routes: Routes = [
  /*{ path: '', redirectTo: '/tickets', pathMatch: 'full' },*/
  { path: 'tickets', component: TicketsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [

  ]
})
export class AppRoutingModule { }
