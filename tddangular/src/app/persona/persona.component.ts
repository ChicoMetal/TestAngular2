import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  constructor(
    public name:string,
    public apellido:string,
    public edad:number,
    public peso:number,
    public estatura:number
  ) { }

  ngOnInit(){}
  
  public CalcIMC(){

    let imc = Math.round( this.peso / ( ( this.estatura ) * ( this.estatura ) ) );
    if( imc < 0 ){

      return 'no encontrado';
    }else if( imc >= 0 && imc < 18 ){
      
      return 'bajo';
    }else if( imc >=18 && imc <= 24 ){
      
      return 'normal'; 
    }else if( imc >=25 && imc <= 26 ){

      return 'sobre peso';
    }else if( imc >=27 && imc <=29 ){

      return 'sobre peso lvl 1';
    }else if( imc >=30 && imc <= 39 ){

      return 'sobre peso lvl 2';
    }else{

      return 'sobre peso lvl 3';
    }

  }

}
