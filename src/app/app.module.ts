import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonaComponent } from './personas/persona/persona.component';

import { LogginService } from './LogginService.service';
import { PersonasService } from './personas.service';
import {DataServices} from './data.services';
import { AppRoutingModule } from './app-routing.module';
import {PersonasComponent} from './personas/personas.component';
import { ErrorComponent } from './error/error.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { LoginGuardianService } from './login/login-guardian.service';
@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    PersonaComponent,
    PersonasComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LogginService,PersonasService,DataServices,LoginService,LoginGuardianService],
  bootstrap: [AppComponent]
})
export class AppModule { }
