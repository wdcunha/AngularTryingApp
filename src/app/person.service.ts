import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Person } from './person';
import { Persons } from './mock-persons';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PersonService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private personsUrl = 'api/persons';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /*
     // GET persons from the mock file
    getPersons(): Observable<Person[]> {
      // TODO: send the message _after_ fetching the persons
      this.messageService.add('PersonService: fetched persons');
      return of(Persons);
    }
  */
  /** GET persons from the server */
  getPersons(): Observable<Person[]> {
    // TODO: send the message _after_ fetching the persons
//    this.messageService.add('PersonService: fetched persons');
    return this.http.get<Person[]>(this.personsUrl)
      .pipe(
        tap(_ => this.log('fetched persons')),
        catchError(this.handleError<Person[]>('getPersons', []))
    );
  }

  /** GET person by id. Will 404 if id not found */
  getPerson(id: number): Observable<Person> {
    const url = `${this.personsUrl}/${id}`;
/*  this.messageService.add(`PersonService: fetched person id=${id}`);
    return of(Persons.find(person => person.id === id));
*/
    return this.http.get<Person>(url)
      .pipe(
        tap(_ => this.log(`fetched person id=${id}`)),
        catchError(this.handleError<Person>(`getPersons id=${id}`))
      );
  }
  /** PUT: update the person on the server */
  updatePerson(person: Person): Observable<any> {
    return this.http.put(this.personsUrl, person, this.httpOptions).pipe(
      tap(_ => this.log(`updated person id=${person.id}`)),
      catchError(this.handleError<any>('updatePerson'))
    );
  }

  /** POST: add a new person to the server */
  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.personsUrl, person, this.httpOptions).pipe(
      tap((newPerson: Person) => this.log(`added person id=${newPerson.id}`)),
      catchError(this.handleError<Person>('addPerson', person))
    );
  }

  /** DELETE: delete the person from the server */
  deletePerson(person: Person | number): Observable<Person> {
    const id = typeof person === 'number' ? person : person.id;
    const url = `${this.personsUrl}/${id}`;

    return this.http.delete<Person>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted person id=${id}`)),
      catchError(this.handleError<Person>('deletePerson'))
    );
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

  /** Log a PersonService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PersonService: ${message}`);
  }
}
