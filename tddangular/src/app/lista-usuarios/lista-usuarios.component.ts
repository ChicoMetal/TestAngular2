import { Component, OnInit } from '@angular/core';

import { UsuarioComponent } from '.././usuario/usuario.component';
@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  
  public Usuario:UsuarioComponent;
  public UsuarioSeleccionado:UsuarioComponent;

  constructor() { 

    this.Usuario = new UsuarioComponent(
      'Andres',
      'andres@g.com',
      35264598
    );
  }

  ngOnInit() {
  }

  Seleccionar( Usuario:UsuarioComponent ){

    this.UsuarioSeleccionado = Usuario;
  }

}
