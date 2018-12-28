import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AngularMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TicketsComponent } from './ui/ticket/ticket-list/tickets.component';
import { TicketComponent } from './ui/ticket/ticket-details/ticket.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    TicketComponent,
    TicketsComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TicketComponent]
})
export class AppModule { }
