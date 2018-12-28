import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Ticket } from '../model/ticket';

import { TICKETS, TICKET, SUCCESS } from '../mock/mock-ticket';

const REST = true;
const API_URL = "http://localhost:9999/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class TicketService {

  private ticketUrl = API_URL + 'ticket';

  constructor(private http: HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    if (REST) {
      return this.http.get<Ticket[]>(this.ticketUrl)
        .pipe(
          tap(_ => this.log('fetched tickets')),
          catchError(this.handleError('tickets', []))
        );
    } else {
      return of(TICKETS);
    }
  }

  /** GET ticket by ticketId. Will 404 if ticketId not found */
  getTicket(ticketId: number): Observable<Ticket> {
    if (REST) {
      const url = `${this.ticketUrl}/${ticketId}`;
      return this.http.get<Ticket>(url).pipe(
        tap(_ => this.log(`fetched ticket ticketId=${ticketId}`)),
        catchError(this.handleError<Ticket>(`getTicket ticketId=${ticketId}`))
      );
    } else {
      return of(TICKET);
    }
  }

  /** POST: add a new ticket to the server */
  addTicket(ticket: Ticket): Observable<Ticket> {
    if (REST) {
      return this.http.post<Ticket>(this.ticketUrl, ticket, httpOptions).pipe(
        tap((ticket: Ticket) => this.log(`added ticket w/ ticketId=${ticket.ticketId}`)),
        catchError(this.handleError<Ticket>('addTicket'))
      );
    } else {
      ticket.ticketId = 1002;
      return of(ticket);
    }
  }

  /** DELETE: delete the ticket from the server */
  deleteTicket(ticket: Ticket | number): Observable<any> {
    if (REST) {
      const ticketId = typeof ticket === 'number' ? ticket : ticket.ticketId;
      const url = `${this.ticketUrl}/${ticketId}`;

      return this.http.delete<Ticket>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted ticket ticketId=${ticketId}`)),
        catchError(this.handleError<Ticket>('deleteTicket'))
      );
    } else {
      return of(SUCCESS);
    }
  }

  /** PUT: update the ticket on the server */
  updateTicket(ticket: Ticket): Observable<any> {
    if (REST) {
      return this.http.put(this.ticketUrl, ticket, httpOptions).pipe(
        tap(_ => this.log(`updated ticket ticketId=${ticket.ticketId}`)),
        catchError(this.handleError<any>('updateTicket'))
      );
    } else {
      ticket.note = "customer contacted";
      return of(ticket);
    }
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a message */
  private log(message: string) {
    console.log(`TicketService: ${message}`);
  }
}
