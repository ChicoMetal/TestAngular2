import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { UsuariosService } from './usuarios.service';
import { PersonaRowComponent } from './persona-row/persona-row.component';
import { UsuarioRowComponent } from './usuario-row/usuario-row.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    PersonaRowComponent,
    UsuarioRowComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
