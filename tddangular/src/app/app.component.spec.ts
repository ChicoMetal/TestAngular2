import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

import { UsuariosServiceMock } from './mocks/usuarios.service.mock'

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonaRowComponent  } from './persona-row/persona-row.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioRowComponent } from './usuario-row/usuario-row.component';
import { UsuariosService } from './usuarios.service';
import { ReversePipe } from './pipes/reverse.pipe';
import { FormularioSkuComponent } from './formulario-sku/formulario-sku.component';
import { ValidarSku } from "./FormulariosValidaciones/validarSku";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PersonaComponent,
        PersonaRowComponent,
        UsuarioRowComponent,
        UsuarioComponent,
        ListaUsuariosComponent,
        ReversePipe,
        ValidarSku,
        FormularioSkuComponent
      ],
      imports: [
        BrowserModule,
        HttpModule,
        FormControl,
        Validators,
        FormGroup
      ],
      providers: [
        { provide: UsuariosService, useClass: UsuariosServiceMock }
      ]
    }).compileComponents();
  }));
/**
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
  **/
});
