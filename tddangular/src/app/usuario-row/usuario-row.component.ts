import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {  UsuarioComponent } from '../usuario/usuario.component';

@Component({
  selector: 'app-usuario-row',
  templateUrl: './usuario-row.component.html',
  styleUrls: ['./usuario-row.component.css']
})
export class UsuarioRowComponent implements OnInit {
  
  public emailParaMostrar:string;
  @Input() Usuario:UsuarioComponent;
  @Output() onSelected = new EventEmitter<UsuarioComponent>();

  constructor() { }

  ngOnInit() {
  }

  public MostrarEmail(){
    this.emailParaMostrar = this.Usuario.email;
  }

  public Seleccionar(){

    this.onSelected.emit( this.Usuario );
  }
}
