import { Component } from '@angular/core';
import { Calculator } from './calculator';

import { PersonaComponent } from './persona/persona.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Persona:PersonaComponent;

  constructor(){
    this.Persona = new PersonaComponent(
      'carlos',
      'guzman',
      25,
      52,
      1.68
    );
  }

  ngOnInit(){
  
    let calculadora = new Calculator();
    
    let result = calculadora.Multiply(3,3);
    //console.log( result === 9 );//test passed
    //console.log( result !== 12 );//test passed

    let resultD = calculadora.Divide(6,0);
    //console.log( resultD === 3 );//test passed
    //console.log( resultD !== 30 );//test passed
    //console.log( resultD );
  }
}
