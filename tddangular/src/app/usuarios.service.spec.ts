import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import {
  Http, 
  ConnectionBackend, 
  BaseRequestOptions, 
  Response, 
  ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { UsuariosService } from './usuarios.service';

describe('UsuariosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        UsuariosService,
        { 
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        },
      ]
    });
  });

  it('Deberia ser creado el servicio', inject([UsuariosService], (service: UsuariosService) => {
    expect(service).toBeTruthy();
  }));
  
  describe('Test para getUser', () => {
    
    it('Deberia Obtener un usuario', 
      inject([UsuariosService, MockBackend], fakeAsync((usuarioService, mockBackend:MockBackend) => {
        
        let dataResponse;
        let responseBody = {
                            "id": 1,
                            "name": "Leanne Graham",
                            "username": "Bret",
                            "email": "Sincere@april.biz",
                            "address": {
                              "street": "Kulas Light",
                              "suite": "Apt. 556",
                              "city": "Gwenborough",
                              "zipcode": "92998-3874",
                              "geo": {
                                "lat": "-37.3159",
                                "lng": "81.1496"
                              }
                            },
                            "phone": "1-770-736-8031 x56442",
                            "website": "hildegard.org",
                            "company": {
                              "name": "Romaguera-Crona",
                              "catchPhrase": "Multi-layered client-server neural-net",
                              "bs": "harness real-time e-markets"
                            }
                          };

        let mockResponse = new ResponseOptions({body: JSON.stringify(responseBody)});
console.log( mockResponse, '--------------------------' );
        mockBackend.connections.subscribe( connection => {
          
          expect( connection.request.url )
            .toBe('http://jsonplaceholder.typicode.com/users/1');

          connection.mockRespond(new Response(mockResponse));          
        });

        usuarioService.getUsuario( 1 )
          .subscribe( response => {
            dataResponse = response;
          });
        tick();//peticion asincrona la vuelve sincrona 

        expect( dataResponse.id ).toBeDefined();
        expect( dataResponse.name ).toBeDefined();
        expect( dataResponse.address ).toBeDefined();
      }))
    );

  });
  
});
