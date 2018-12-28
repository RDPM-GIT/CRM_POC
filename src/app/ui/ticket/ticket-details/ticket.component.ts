import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

import { Ticket } from "../../../model/ticket";

import { TicketService } from '../../../service/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticket: Ticket;
  ticketForm: FormGroup;

  constructor(
    private ticketService: TicketService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TicketComponent>,
    @Inject(MAT_DIALOG_DATA) ticket: Ticket
  ) {
    this.ticket = ticket;
    this.ticketForm = fb.group({
      phone: [ticket.phone, Validators.required],
      status: [ticket.status, Validators.required],
      note: [ticket.note, Validators.required]
    });
  }

  ngOnInit() {
  }

  save() {
    if (!this.ticketForm.valid) {
      return;
    }
    let updatedTicket = Object.assign({}, this.ticket);
    updatedTicket.status = this.ticketForm.value.status;
    updatedTicket.note = this.ticketForm.value.note;

    this.ticketService.updateTicket(updatedTicket).subscribe(
      (data: any) => {
        this.dialogRef.close(data.success);
      }
    );
  }

  close() {
    this.dialogRef.close(false);
  }

}
