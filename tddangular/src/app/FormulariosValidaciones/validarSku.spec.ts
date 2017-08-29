import { ValidarSku } from "./validarSku";
import { FormControl } from "@angular/forms";

describe('Test para las validaciones de formularios sku', ()=>{

    it('Test para skuValido no deberia retornar ningun error', ()=>{
        
        let formControl = new FormControl();
        formControl.setValue("1234");
        let respuesta = ValidarSku.skuValido( formControl );

        expect( respuesta ).toBeNull();
    });

    it('Test para skuValido deberia retornar error en el campo', ()=>{
        
        let formControl = new FormControl();
        formControl.setValue("234");
        let respuesta = ValidarSku.skuValido( formControl );

        expect( respuesta.skuInvalido ).toBeTruthy();
    });
});