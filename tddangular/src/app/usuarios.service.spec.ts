import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import {
  Http, 
  ConnectionBackend, 
  BaseRequestOptions, 
  Response, 
  ResponseOptions,
  RequestMethod } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { UsuariosService } from './usuarios.service';

describe('UsuariosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,//para mockear peticiones GET, POST, PUT etc
        UsuariosService,//servicio que se va a probar
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
  
  //test de unitario para el consumo de un servicio
  describe('Test para getUser', () => {
    
    it('Deberia Obtener un usuario', 
      inject([UsuariosService, MockBackend], fakeAsync((usuarioService, mockBackend:MockBackend) => {//inyectar los modulos requeridos
        
        let dataResponse, requestMethod, headers;//recibira la respuesta del "servidor"
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
                          };//JSON que sera dado como respuesta a la peticion

        let mockResponse = new ResponseOptions({body: JSON.stringify(responseBody)});//crear un response como los de los servidores

        mockBackend.connections.subscribe( connection => {//preparar el mock de la peticion
          
          requestMethod = connection.request.method;//obtener el metodo por el que se realizo la peticion
          headers = connection.request.headers.get('API-TOKEN');//probar headers

          expect( connection.request.url )
            .toBe('http://jsonplaceholder.typicode.com/users/1');//testear si la ruta es la correcta

          connection.mockRespond(new Response(mockResponse)); //mockear la conexion y asignar la respuesta que se dara a la peticion       
        });

        usuarioService.getUsuario( 1 )
          .subscribe( response => {
            dataResponse = response;
          });//llamar la funcion que hace la peticion, estando ya preparado el mock que controlara la respuesta
        tick();//peticion asincrona la vuelve sincrona 
        
        //verificar resultados
        expect( headers === null ).toBeFalsy();
        expect( requestMethod ).toBe( RequestMethod.Get);
        expect( dataResponse.id ).toBeDefined();
        expect( dataResponse.name ).toBeDefined();
        expect( dataResponse.address ).toBeDefined();
      }))
    );

  });

  //test de unitario para el consumo de un servicio: esperar un fallo
  describe('Test para getUser, se espera error', () => {
    
    it('Deberia Devolver un error', 
      inject([UsuariosService, MockBackend], fakeAsync((usuarioService, mockBackend:MockBackend) => {
        
        let dataResponse, errorResponse;
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

        mockBackend.connections.subscribe( connection => {
          
          expect( connection.request.url )
            .toBe('http://jsonplaceholder.typicode.com/users/1');

          connection.mockRespond(new Error('Error'));          
        });

        usuarioService.getUsuario( 1 )
          .subscribe( 
            response => {
              dataResponse = response;
            },
            error => {
              errorResponse = error;
            }
        );
        tick();//peticion asincrona la vuelve sincrona 

        expect( dataResponse ).toBeUndefined();
        expect( errorResponse ).toBeDefined();
      }))
    );

  });


  //test de unitario para el consumo de un servicio: PUT
  describe('Test para CreateUser', () => {
    
    it('Test CreateUSer , Deberia devolver el usuario con un id', 
      inject([UsuariosService, MockBackend], fakeAsync((usuarioService, mockBackend:MockBackend) => {
        
        let dataResponse, errorResponse;
        let userMock = {
                        "id": 1,
                        "name": "Leanne Graham",
                        "username": "Bret",
                        "email": "Sincere@april.biz"
                      };

        let mockResponse = new ResponseOptions({body: JSON.stringify(userMock)});

        mockBackend.connections.subscribe( connection => {
          
          expect( connection.request.url )
            .toBe('http://jsonplaceholder.typicode.com/users');

          connection.mockRespond(new Response(mockResponse) );          
        });
        
        let dataUser = {
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz"
        };

        usuarioService.CreateUsuario( dataUser )
          .subscribe( 
            response => {
              dataResponse = response;
            },
            error => {
              errorResponse = error;
            }
        );
        tick();//peticion asincrona la vuelve sincrona 

        expect( errorResponse ).toBeUndefined();
        expect( dataResponse.id ).toBeDefined();
        expect( dataResponse.name ).toEqual("Leanne Graham");
        expect( dataResponse.username ).toEqual("Bret");
        expect( dataResponse.email ).toEqual("Sincere@april.biz");
      }))
    );

    it('Test CreateUser, Deberia devolver un error', 
      inject([UsuariosService, MockBackend], fakeAsync((usuarioService, mockBackend:MockBackend) => {
        
        let dataResponse, errorResponse;
        let userMock = {
                        "id": 1,
                        "name": "Leanne Graham",
                        "username": "Bret",
                        "email": "Sincere@april.biz"
                      };

        let mockResponse = new ResponseOptions({body: JSON.stringify(userMock)});

        mockBackend.connections.subscribe( connection => {
          
          expect( connection.request.url )
            .toBe('http://jsonplaceholder.typicode.com/users');

          connection.mockRespond(new Error('Error') );          
        });
        
        let dataUser = {
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz"
        };

        usuarioService.CreateUsuario( dataUser )
          .subscribe( 
            response => {
              dataResponse = response;
            },
            error => {
              errorResponse = error;
            }
        );
        tick();//peticion asincrona la vuelve sincrona 

        expect( errorResponse ).toBeDefined();
        expect( dataResponse ).toBeUndefined();
      
      }))
    );

  });

  //test de unitario para el consumo de un servicio: PUT
  describe('Test para UpdateUser', () => {
    
    it('Test UpdateUser , Deberia devolver el usuario actualizado', 
      inject([UsuariosService, MockBackend], fakeAsync((usuarioService, mockBackend:MockBackend) => {
        
        let dataResponse, errorResponse;
        let userMock = {
                        "id": 12,
                        "name": "Charlies za",
                        "username": "Bret",
                        "email": "Sincere@april.biz"
                      };

        let mockResponse = new ResponseOptions({body: JSON.stringify(userMock)});

        mockBackend.connections.subscribe( connection => {
          
          expect( connection.request.url )
            .toBe('http://jsonplaceholder.typicode.com/users/12');

          connection.mockRespond(new Response(mockResponse) );          
        });
        
        let dataUser = {
          id: 12,
          name: "Charlies za",
          username: "Bret",
          email: "Sincere@april.biz"
        };

        usuarioService.UpdateUser( dataUser )
          .subscribe( 
            response => {
              dataResponse = response;
            },
            error => {
              errorResponse = error;
            }
        );
        tick();//peticion asincrona la vuelve sincrona 

        expect( errorResponse ).toBeUndefined();
        expect( dataResponse.id ).toBeDefined();
        expect( dataResponse.name ).toEqual("Charlies za");
        expect( dataResponse.username ).toEqual("Bret");
        expect( dataResponse.email ).toEqual("Sincere@april.biz");
      }))
    );

    it('Test UpdateUser, Deberia devolver un error', 
      inject([UsuariosService, MockBackend], fakeAsync((usuarioService, mockBackend:MockBackend) => {
        
        let dataResponse, errorResponse;
        let userMock = {
                        "id": 12,
                        "name": "Charlie za",
                        "username": "Bret",
                        "email": "Sincere@april.biz"
                      };

        let mockResponse = new ResponseOptions({body: JSON.stringify(userMock)});

        mockBackend.connections.subscribe( connection => {
          
          expect( connection.request.url )
            .toBe('http://jsonplaceholder.typicode.com/users/12');

          connection.mockRespond(new Error('Error') );          
        });
        
        let dataUser = {
          id: 12,
          name: "Charlie za",
          username: "Bret",
          email: "Sincere@april.biz"
        };

        usuarioService.UpdateUser( dataUser )
          .subscribe( 
            response => {
              dataResponse = response;
            },
            error => {
              errorResponse = error;
            }
        );
        tick();//peticion asincrona la vuelve sincrona 

        expect( errorResponse ).toBeDefined();
        expect( dataResponse ).toBeUndefined();
      
      }))
    );

  });

  //test de unitario para el consumo de un servicio: PUT
  describe('Test para DeleteUser', () => {
    
    it('Test DeleteUser , Deberia devolver {}', 
      inject([UsuariosService, MockBackend], fakeAsync((usuarioService, mockBackend:MockBackend) => {
        
        let dataResponse, errorResponse;
        let userMock = {};

        let mockResponse = new ResponseOptions({body: JSON.stringify(userMock)});

        mockBackend.connections.subscribe( connection => {
          
          expect( connection.request.url )
            .toBe('http://jsonplaceholder.typicode.com/users/52');

          connection.mockRespond(new Response(mockResponse) );          
        });
        
        usuarioService.DeleteUser( 52 )
          .subscribe( 
            response => {
              dataResponse = response;
            },
            error => {
              errorResponse = error;
            }
        );
        tick();//peticion asincrona la vuelve sincrona 

        expect( errorResponse ).toBeUndefined();
        expect( dataResponse ).toEqual({});
      }))
    );

    it('Test DeleteUser, Deberia devolver un error', 
      inject([UsuariosService, MockBackend], fakeAsync((usuarioService, mockBackend:MockBackend) => {
        
        let dataResponse, errorResponse;
        let userMock = {};

        let mockResponse = new ResponseOptions({body: JSON.stringify(userMock)});

        mockBackend.connections.subscribe( connection => {
          
          expect( connection.request.url )
            .toBe('http://jsonplaceholder.typicode.com/users/52');

          connection.mockRespond(new Error('Error') );          
        });
      
        usuarioService.DeleteUser( 52 )
          .subscribe( 
            response => {
              dataResponse = response;
            },
            error => {
              errorResponse = error;
            }
        );
        tick();//peticion asincrona la vuelve sincrona 

        expect( errorResponse ).toBeDefined();
        expect( dataResponse ).toBeUndefined();
      
      }))
    );

  });
  
});
