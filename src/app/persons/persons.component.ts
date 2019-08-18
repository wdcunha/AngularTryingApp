import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
// import { Persons } from '../mock-persons'; // changed by service
import { PersonService } from '../person.service'; // substitute calling for mock above


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  constructor(private personService: PersonService) { }

  // person: Person = {
  //   id: 10, name: 'Windstorm', nif: '3234902399', language: 'ENGLISH'
  // };

  persons: Person[];
//  selectedPerson: Person;

  getPersons(): void {
    // this.persons = this.personService.getPersons();
    this.personService.getPersons()
      .subscribe(persons => this.persons = persons);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.personService.addPerson({ name } as Person)
      .subscribe(person => {
        this.persons.push(person);
      });
  }

  delete(person: Person): void {
    this.persons = this.persons.filter(h => h !== person);
    this.personService.deletePerson(person).subscribe();
  }
/*
  onSelect(person: Person): void {
    this.selectedPerson = person;
  }
*/

  ngOnInit() {
    this.getPersons();
  }

}
