import { Component, OnInit } from '@angular/core';

import { UsuarioComponent } from '.././usuario/usuario.component';
@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  
  public UsuarioSeleccionado:UsuarioComponent;
  public Usuarios:UsuarioComponent[];

  constructor() { 
  }

  ngOnInit() {
      this.Usuarios = [ new UsuarioComponent( 'Andres', 'andres@g.com', 35264598 ),
                        new UsuarioComponent( 'Usuario1', 'usuario1@g.com', 85454515 ),
                        new UsuarioComponent( 'Usuario2', 'usuario2@g.com', 145451451 ),
                        new UsuarioComponent( 'Usuario3', 'usuario3@g.com', 4541251 ) ];
  }

  Seleccionar( Usuario:UsuarioComponent ){

    this.UsuarioSeleccionado = Usuario;
  }

}
