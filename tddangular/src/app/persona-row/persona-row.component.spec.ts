import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PersonaRowComponent } from './persona-row.component';
import{ PersonaComponent } from './../persona/persona.component';

describe('PersonaRowComponent', () => {
  let component: PersonaRowComponent;
  let fixture: ComponentFixture<PersonaRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaRowComponent);
    component = fixture.componentInstance;
    component.Persona = new PersonaComponent(
      'carlos',
      'Guzman',
      25,
      52,
      1.68
    );
    fixture.detectChanges();//refresca la vista
  });

  it('El componente deberia ser creado', () => {
    expect(component).toBeTruthy();
  });

  it('Validar el nombre: carlos', () => {
    expect( component.Persona.name ).toEqual('carlos');
  });

  it('Validar el edad: 25', () => {
    expect( component.Persona.edad ).toEqual(25);
  });

  it('Validar contenido h1 de la plantilla: carlos', () => {
    let de = fixture.debugElement.query( By.css('h1') );//por medio de un selector css obtengo el componente html
    let element = de.nativeElement; //obtengo el elemento de la plantilla
    fixture.detectChanges();//refresco cambios
    expect( element.textContent ).toEqual('carlos');
  });

  it('Validar contenido h1 de la plantilla (modificando el contenido en ejecucion de pruebas): otro nombre', () => {
    let de = fixture.debugElement.query( By.css('h1') );//por medio de un selector css obtengo el componente html
    let element = de.nativeElement; //obtengo el elemento de la plantilla
    component.Persona.name = 'otro nombre';//modifico el valor de la propiedad
    fixture.detectChanges();//refresco cambios
    expect( element.textContent ).toEqual('otro nombre');
  });

  it('Validar contenido h2 : Su edad es: 25', () => {
    let de = fixture.debugElement.query( By.css('h2') );//por medio de un selector css obtengo el componente html
    let element = de.nativeElement; //obtengo el elemento de la plantilla
    
    fixture.detectChanges();//refresco cambios
    expect( element.textContent ).toEqual('Su edad es: 25');
  });
});
