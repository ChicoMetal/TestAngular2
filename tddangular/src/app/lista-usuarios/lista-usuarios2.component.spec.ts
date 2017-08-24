import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ListaUsuariosComponent } from './lista-usuarios.component';
import { UsuarioRowComponent } from '.././usuario-row/usuario-row.component';
import { UsuariosService } from './../usuarios.service';
import { UsuarioComponent } from '../usuario/usuario.component';

//pruebas a un componente al que se le inyecta un servicio usando spias 
describe('ListaUsuariosComponent: pruebas con espias', () => {
    let component: ListaUsuariosComponent;
    let fixture: ComponentFixture<ListaUsuariosComponent>;
    let usuariosService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ListaUsuariosComponent, UsuarioRowComponent ],
            imports: [HttpModule],
            providers: [
                UsuariosService
            ]
        })
        .compileComponents();
        }));
    
        beforeEach(() => {
        fixture = TestBed.createComponent(ListaUsuariosComponent);
        component = fixture.componentInstance;
        usuariosService = fixture.debugElement.injector.get( UsuariosService );
        //fixture.detectChanges(); //para probar los spyes no se crea el componente antes de la prueba 
        });
    
        it('Deberia ser creado el componente', ()=>{          

            fixture.detectChanges();//los cambios deben hacerse manualmente
            
            expect( component ).toBeTruthy();
            
        });
        
        it('Deberia llamarse el metodo getUsuarios y devolver el mock', ()=>{
            
            let mockUsuarios = Observable.of(
                [ new UsuarioComponent( 'Juan', 'juan@g.com', 35264598 ),
                new UsuarioComponent( 'Usuario4', 'usuario4@g.com', 85454515 ),
                new UsuarioComponent( 'Usuario5', 'usuario5@g.com', 145451451 ),
                new UsuarioComponent( 'Usuario6', 'usuario3@g.com', 4541251 ) ]);
        
            spyOn( usuariosService, 'getUsuarios' ).and.returnValue( mockUsuarios );//espia que mockea la llamada a la funcion
            
            fixture.detectChanges();//ya preparado los mocks se construye el componente para que sea construido en base a los mocks

            expect( component.Usuarios.length ).toEqual(4);
            expect( component.Usuarios[0].name ).toEqual('Juan');
            expect( usuariosService.getUsuarios ).toHaveBeenCalled();//verifica que se llamara el metodo
            expect( usuariosService.getUsuarios ).toHaveBeenCalledTimes(1);//verifica cuantas veces se llamo el metodo
        });

        it('Deberia llamarse el metodo getUsuario y devolver el mock', ()=>{
            
            fixture.detectChanges();//ya preparado los mocks se construye el componente para que sea construido en base a los mocks

            let mockUsuario = Observable.of(                
                new UsuarioComponent( 'Pepito', 'pepito@g.com', 4541251 ) );
        
            spyOn( usuariosService, 'getUsuario' ).and.returnValue( mockUsuario );//espia que mockea la llamada a la funcion
            
            component.getUsuario(123);

            expect( component.usuarioUnico.name ).toEqual('Pepito');
            expect( usuariosService.getUsuario ).toHaveBeenCalled();//verifica que se llamara el metodo
            expect( usuariosService.getUsuario ).toHaveBeenCalledTimes(1);//verifica cuantas veces se llamo el metodo
            expect( usuariosService.getUsuario ).toHaveBeenCalledWith(123);//verifica que se llamara con los parametros se llamo
        });

});