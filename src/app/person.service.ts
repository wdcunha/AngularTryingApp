import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Person } from './person';
import { Persons } from './mock-persons';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PersonService {

  private personsUrl = 'api/persons';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
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
    this.messageService.add('PersonService: fetched persons');
    return this.http.get<Person[]>(this.personsUrl);
  }

  getPerson(id: number): Observable<Person> {
    // TODO: send the message _after_ fetching the person
    this.messageService.add(`PersonService: fetched person id=${id}`);
    return of(Persons.find(person => person.id === id));
  }

  /** Log a PersonService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PersonService: ${message}`);
  }
}
