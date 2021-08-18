import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//COMPONENTES
import { AppComponent } from './app.component';
import { LogoComponent } from './Components/logo/logo.component';
import { NosotrosComponent } from './Components/nosotros/nosotros.component';
import { BandasComponent } from './Components/bandas/bandas.component';
import { EventosComponent } from './Components/eventos/eventos.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CrearBandaComponent } from './Components/crear-banda/crear-banda.component';
import { ListarBandaComponent } from './Components/listar-banda/listar-banda.component';
import { AveriaComponent } from './Components/averia/averia.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { HeaderComponent } from './Components/header/header.component';
import { MilkwookieComponent } from './Components/milkwookie/milkwookie.component';
import { NotyetComponent } from './Components/notyet/notyet.component';
//import { LoginComponent } from './login/login/login.component';

const rutas: Routes = [
  { path: 'bandas', component: BandasComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'avería', component: AveriaComponent },
  { path: 'milkwookie', component: MilkwookieComponent },
  { path: 'listar', component: ListarBandaComponent },
  { path: 'crear', component: CrearBandaComponent },
  { path: 'notyet', component: NotyetComponent },
  { path: 'crear', component: CrearBandaComponent },
  { path: 'listar', component: ListarBandaComponent },
  //{ path: 'inicio', component: InicioComponent },
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NosotrosComponent,
    BandasComponent,
    EventosComponent,
    FooterComponent,
    CrearBandaComponent,
    ListarBandaComponent,
    InicioComponent,
    HeaderComponent,
    MilkwookieComponent,
    NotyetComponent,
    AveriaComponent,
    //LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
