import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioComponent } from './usuario.component';

describe('Test para el componenete Usuario', () => {
  let usuario:UsuarioComponent;

  beforeEach( () => {
  
    usuario = new UsuarioComponent(
      'carlos',
      'carlos@g.com',
      3008668247
    );

  });
  
  describe('Test para los datos de Usuario', () => {
    
    it('Test atributos', () => {
      
      expect( usuario.name ).toEqual('carlos');
      expect( usuario.email ).toEqual('carlos@g.com');
      expect( usuario.cel ).toEqual(3008668247);
    });
    
  });

});