import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {PersonService} from '../person.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  @Input() person: Person;

  getPerson(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.personService.getPerson(id).subscribe(person => this.person = person);
  }

  goBack(): void {
    this.location.back();
  }

  constructor(
    private route: ActivatedRoute, // holds information about the route to this instance of the PersonDetailComponent
    private personService: PersonService, // gets hero data from the remote server and use it to get the person-to-display
    private location: Location // Angular service for interacting with the browser
  ) { }

  ngOnInit() {
    this.getPerson();
  }

}
