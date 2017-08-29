import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { ValidarSku } from "./../FormulariosValidaciones/validarSku";

@Component({
  selector: 'app-formulario-sku',
  templateUrl: './formulario-sku.component.html',
  styleUrls: ['./formulario-sku.component.css']
})
export class FormularioSkuComponent implements OnInit {
  
  skuFormulario:FormGroup;
  skuCampo:FormControl;
  skuNombre:FormControl;

  constructor() { 
    this.makeSkuForm();
  }

  ngOnInit() {
  }

  private makeSkuForm(){

    this.skuCampo = new FormControl('', [Validators.required, ValidarSku.skuValido]);//campo con restricciones de validacion propias y de angular
    this.skuNombre = new FormControl();

    this.skuFormulario = new FormGroup({
      sku: this.skuCampo,
      nombre: this.skuNombre
    });
  }

}
