import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material';

import { Ticket } from '../../../model/ticket';

import { TicketService } from '../../../service/ticket.service';

import { TicketComponent } from "../ticket-details/ticket.component";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  displayedColumns: string[] = ['phone', 'status', 'note', 'action'];
  tickets: Ticket[];

  constructor(
    private ticketService: TicketService,
    public dialog: MatDialog) { }

  ngOnInit() {
    console.log('TicketComponent -> ngOnInit');
    this.getTickets();
  }

  getTickets(): void {
    console.log('TicketComponent -> getTickets');

    this.ticketService.getTickets().subscribe(
      (data: any) => this.tickets = data.tickets
    );
    console.log('TicketComponent -> getTickets', this.tickets);
  }

  onSelect(ticket: Ticket) {
    console.log('TicketComponent -> onSelect');

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = ticket;

    const dialogRef = this.dialog.open(TicketComponent,
      dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: `, result);
    });
  }

}
