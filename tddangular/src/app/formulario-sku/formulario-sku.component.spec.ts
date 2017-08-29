import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
});
