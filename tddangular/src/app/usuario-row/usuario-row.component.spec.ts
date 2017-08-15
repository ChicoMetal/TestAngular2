import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { UsuarioRowComponent } from './usuario-row.component';
import { UsuarioComponent } from '../usuario/usuario.component';

describe('UsuarioRowComponent', () => {
  let component: UsuarioRowComponent;
  let fixture: ComponentFixture<UsuarioRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioRowComponent);
    component = fixture.componentInstance;
  
    component.Usuario = new UsuarioComponent(
      'carlos',
      'carlos@g.com',
      3008668247
    );

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Comprobando valores del usuario', () => {
    
    expect( component.Usuario.name ).toEqual('carlos');
    expect( component.Usuario.email ).toEqual('carlos@g.com');
    expect( component.Usuario.cel ).toEqual(3008668247);
  });
  
  it('Comprobando que el valor mostrado en h5 sea: carlos ', () => {

    let de = fixture.debugElement.query( By.css('h5') );
    let el = de.nativeElement;
    fixture.detectChanges();//refresco cambios
    expect( el.textContent ).toEqual('carlos');
  });

  it('Funcional: Debe mostrar email en pantalla al hacer click en el boton ', () => {
    //Assert
    let deButton = fixture.debugElement.query( By.css('.btn-mostrar-email') );
    let deEmailContent = fixture.debugElement.query( By.css('#email') );
        
    //Prepare
    let elButton = deButton.nativeElement;
    let elEmail = deEmailContent.nativeElement;
    let emailOld = elEmail.textContent;

    deButton.triggerEventHandler('click', null );

    fixture.detectChanges();//refresco cambios

    //Aserts
    expect( emailOld ).toEqual('');
    expect( elEmail.textContent ).toEqual('carlos@g.com');
  });


});
