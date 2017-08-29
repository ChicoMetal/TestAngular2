import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { UsuariosService } from './usuarios.service';
import { PersonaRowComponent } from './persona-row/persona-row.component';
import { UsuarioRowComponent } from './usuario-row/usuario-row.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { FormularioSkuComponent } from './formulario-sku/formulario-sku.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    PersonaRowComponent,
    UsuarioRowComponent,
    UsuarioComponent,
    ListaUsuariosComponent,
    ReversePipe,
    FormularioSkuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,ReactiveFormsModule, 
    FormsModule
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
