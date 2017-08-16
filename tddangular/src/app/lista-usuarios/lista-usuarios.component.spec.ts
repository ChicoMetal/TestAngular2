import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { ListaUsuariosComponent } from './lista-usuarios.component';
import { UsuarioRowComponent } from '.././usuario-row/usuario-row.component';

describe('ListaUsuariosComponent', () => {
  let component: ListaUsuariosComponent;
  let fixture: ComponentFixture<ListaUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaUsuariosComponent, UsuarioRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('Pruebas del componente lista-usuarios', () => {
  
    it('Deberia estar el compononente usuario-row', () => {//probar si un componente se esta agregando

      let de = fixture.debugElement.query( By.css('app-usuario-row') );

      expect( de ).toBeTruthy();
    });

    it('Funcional: Validar la propiedad output desde el padre del componente', () => {

      let deButton = fixture.debugElement.query( By.css('app-usuario-row .btn-seleccionar') );
      
      deButton.triggerEventHandler('click', null );//P1 = grupo de eventos, P2 = evento especifico
  
      fixture.detectChanges();

      expect( component.UsuarioSeleccionado.name ).toEqual('Andres');
    });



  });
});
