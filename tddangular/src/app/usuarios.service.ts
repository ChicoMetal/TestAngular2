import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuariosService {
  
  public urlService:string = 'http://jsonplaceholder.typicode.com/users';

  constructor( private http:Http ) { }
  
  public getUsuario( idUsuario:number ):Observable<any>{
    
    return this.http.get( `${this.urlService}/${idUsuario}` )
      .map( response => response.json() );
  }

  public CreateUsuario( usuario:{} ):Observable<any>{

    return this.http.post( `${this.urlService}`, JSON.stringify( usuario ) )
      .map( response => response.json())
  }
  
  public UpdateUser( user:{id:number} ):Observable<any>{

    let id = user.id;
    return this.http.put(`${this.urlService}/${id}`, JSON.stringify( user ) )
      .map( response => response.json());
  }

  public DeleteUser( userId:number ):Observable<{}>{

    return this.http.delete(`${this.urlService}/${userId}`)
      .map( response => response.json() );
  }
}
