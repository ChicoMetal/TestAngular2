import { Component, OnInit, Input } from '@angular/core';

import { PersonaComponent } from './../persona/persona.component';

@Component({
  selector: 'app-persona-row',
  templateUrl: './persona-row.component.html',
  styleUrls: ['./persona-row.component.css']
})
export class PersonaRowComponent implements OnInit {

  @Input() Persona: PersonaComponent;

  constructor() { }

  ngOnInit() {
  }

}
