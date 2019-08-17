import { Injectable } from '@angular/core';
import { Person } from './person';
import { Persons } from './mock-persons';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  // getPersons(): Person[] {
  //   return Persons;
  // }
  getPersons(): Observable<Person[]> {
    // TODO: send the message _after_ fetching the persons
    this.messageService.add('PersonService: fetched persons');
    return of(Persons);
  }

  getPerson(id: number): Observable<Person> {
    // TODO: send the message _after_ fetching the person
    this.messageService.add(`PersonService: fetched person id=${id}`);
    return of(Persons.find(person => person.id === id));
  }
  constructor(private messageService: MessageService) { }
}
