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
  selectedPerson: Person;

  getPersons(): void {
    // this.persons = this.personService.getPersons();
    this.personService.getPersons()
      .subscribe(persons => this.persons = persons);
  }

  onSelect(hero: Person): void {
    this.selectedPerson = hero;
  }

  ngOnInit() {
    this.getPersons();
  }

}
