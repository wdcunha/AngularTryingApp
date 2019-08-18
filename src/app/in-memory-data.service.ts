import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Person } from './person';
import { Injectable } from '@angular/core';

/**
 * The in-memory-data.service.ts file replaces mock-heroes.ts, which is now safe to delete.
 * When a server exists, detach the In-memory Web API, and the app's requests will go through
 * to the server.
 */

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const persons = [
      { id: 11, name: 'Dr Nice', nif: '3220909023', language: 'ENGLISH' },
      { id: 12, name: 'Narco', nif: '3234902399', language: 'ENGLISH' },
      { id: 13, name: 'Bombasto', nif: '3234902233', language: 'ENGLISH' },
      { id: 14, name: 'Celeritas', nif: '3234902754', language: 'ENGLISH' },
      { id: 15, name: 'Magneta', nif: '3234902342', language: 'ENGLISH' },
      { id: 16, name: 'RubberMan', nif: '3234902644', language: 'ENGLISH' },
      { id: 17, name: 'Dynama', nif: '3234902322', language: 'ENGLISH' },
      { id: 18, name: 'Dr IQ', nif: '3234902334', language: 'ENGLISH' },
      { id: 19, name: 'Magma', nif: '32349023232', language: 'ENGLISH' },
      { id: 20, name: 'Tornado', nif: '3234902334', language: 'ENGLISH' }
    ];
    return {persons};
  }
  // Overrides the genId method to ensure that a person always has an id.
  // If the persons array is empty, the method below returns the initial number (11).
  // if the persons array is not empty, the method below returns the highest person id + 1.
  genId(persons: Person[]): number {
    return persons.length > 0 ? Math.max(...persons.map(person => person.id)) + 1 : 11;
  }
}
