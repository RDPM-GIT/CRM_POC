import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

import { Ticket } from "../../../model/ticket";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticket: Ticket;
  ticketForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TicketComponent>,
    @Inject(MAT_DIALOG_DATA) ticket: Ticket
  ) {
    this.ticketForm = fb.group({
      phone: [ticket.phone, Validators.required],
      status: [ticket.status, Validators.required],
      note: [ticket.note, Validators.required]
    });
  }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close(this.ticketForm.value);
  }

  close() {
    this.dialogRef.close();
  }

}
