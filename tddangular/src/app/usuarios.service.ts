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
}
