import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(
    public name:string,
    public email:string,
    public cel:number
  ) { }

  ngOnInit() {
  }

}
