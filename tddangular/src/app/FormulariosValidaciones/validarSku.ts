import { FormControl } from "@angular/forms";

export class ValidarSku{
    
    static skuValido( control:FormControl ){
        let valor = control.value;

        if( valor.match(/^123/) )
            return null;//si se cumple la condicion no devuelvo ningun error

        return { skuInvalido: true };//si no se cumplen las condiciones devuelvo un objeto con el error
    }
}