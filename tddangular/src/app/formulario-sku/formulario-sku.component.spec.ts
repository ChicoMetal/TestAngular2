import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser'

import { FormularioSkuComponent } from './formulario-sku.component';

describe('FormularioSkuComponent', () => {
  let component: FormularioSkuComponent;
  let fixture: ComponentFixture<FormularioSkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, FormsModule ],
      declarations: [ FormularioSkuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('Se deberian crear los objetos del formulario', () => {    
    expect(component.skuFormulario).toBeTruthy();
    expect(component.skuCampo).toBeTruthy();
    expect(component.skuNombre).toBeTruthy();
  });

  describe('Test para los campos del fomulario', ()=> {
  
    it('El campo skuCampo deberia ser valido', () =>{
      
      component.skuCampo.setValue('123Algun valor');      
      expect( component.skuCampo.valid ).toBeTruthy();
    });
    
    it('El campo skuCampo deberia ser invalido: skuInvalido', () =>{

      component.skuCampo.setValue('Algun valor');      
      expect( component.skuCampo.invalid ).toBeTruthy();//valido que el campo deberia ser invalido
      expect( component.skuCampo.getError('skuInvalido') ).toBeTruthy();//valido que tipo de error en el formulario es
    });

    it('El campo skuCampo deberia ser invalido', () =>{
      
      component.skuCampo.setValue('');      
      expect( component.skuCampo.invalid ).toBeTruthy();
      expect( component.skuCampo.getError('required') ).toBeTruthy();
    });

  });

  describe('Pruebas funcionales FormularioSkuComponent', ()=> {

    it('Probar mensajes de error: SKU invalido', ()=>{
      let input = fixture.debugElement.query( By.css('input#skuInput') ).nativeElement;//obtener el elemento nativo
      input.value = '23564';//asignar un texto al campo del formulario
      input.dispatchEvent( new Event('input') );
      fixture.detectChanges();
      fixture.whenStable()
        .then(()=>{//promesa cuando ya todos los cambios se realizen ( disparados por detectChanges)
            let mensajes:any[] = fixture.nativeElement.querySelectorAll('.ui.message');//obtener array con los elementos existentes con el selector indicado
            expect( mensajes.length ).toEqual(1);//verifico que debe mostrar alerta de un solo error
            expect( mensajes[0].innerHTML ).toContain('SKU es invalido');
        });

    });

    it('Probar mensajes de error: SKU no existe, es invalido', ()=>{
      let input = fixture.debugElement.query( By.css('input#skuInput') ).nativeElement;//obtener el elemento nativo
      input.value = '';//asignar un texto al campo del formulario
      input.dispatchEvent( new Event('input') );
      fixture.detectChanges();
      fixture.whenStable()
        .then(()=>{//promesa cuando ya todos los cambios se realizen ( disparados por detectChanges)
            let mensajes:any[] = fixture.nativeElement.querySelectorAll('.ui.message');//obtener array con los elementos existentes con el selector indicado
            expect( mensajes.length ).toEqual(2);//verifico que debe mostrar alerta de un solo error
            expect( mensajes[0].innerHTML ).toContain('SKU es requerido');
            expect( mensajes[1].innerHTML ).toContain('SKU es invalido');            
        });

    });
  });
});
