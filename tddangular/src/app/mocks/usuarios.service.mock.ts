import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { UsuarioComponent } from '../usuario/usuario.component';

//crear clase mock para evitar hacer pruebas de subcomponentes usados en 
//el componente que se esta probando
export class UsuariosServiceMock{
    
    //creo los metodos y devuelvo mocks de lo que retornaria normalmente
    public getUsuarios():Observable<UsuarioComponent[]>{
        return Observable.of(//de esta forma puedo retornar un observable sin una respuesta de http
            [ new UsuarioComponent( 'Andres', 'andres@g.com', 35264598 ),
            new UsuarioComponent( 'Usuario1', 'usuario1@g.com', 85454515 ),
            new UsuarioComponent( 'Usuario2', 'usuario2@g.com', 145451451 ),
            new UsuarioComponent( 'Usuario3', 'usuario3@g.com', 4541251 ) ]
        );
    }
}