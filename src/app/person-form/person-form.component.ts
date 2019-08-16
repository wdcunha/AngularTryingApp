import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  language = ['ENGLISH', 'FRENCH', 'ITALIAN', 'JAPANESE', 'RUSSIAN'];

  model = new Person(14, 'Mr Solution', '32342342554', this.language[0]);

  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit(): void {
    this.model = new Person(42, '', '', '');
  }

}
