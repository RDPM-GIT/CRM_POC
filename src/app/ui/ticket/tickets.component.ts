import { Component, OnInit } from '@angular/core';

import { Ticket } from '../../model/ticket';

import { TicketService } from '../../service/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets: Ticket[];

  constructor(private ticketService: TicketService) { }

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
    console.log('TicketComponent -> onSelect', ticket);
  }

}
