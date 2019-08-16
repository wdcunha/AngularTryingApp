import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { Persons } from '../mock-persons';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  // person: Person = {
  //   id: 10, name: 'Windstorm', nif: '3234902399', language: 'ENGLISH'
  // };

  persons = Persons;

  selectedPerson: Person;
  onSelect(hero: Person): void {
    this.selectedPerson = hero;
  }
  constructor() { }

  ngOnInit() {
  }

}
