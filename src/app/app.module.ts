import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicialComponent } from './pages/inicial/inicial.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ParceriasComponent } from './pages/parcerias/parcerias.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { LoginComponent } from './pages/login/login.component';
import { EventoDetalheComponent } from './pages/evento-detalhe/evento-detalhe.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicialComponent,
    SobreComponent,
    ParceriasComponent,
    EventosComponent,
    LoginComponent,
    EventoDetalheComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
