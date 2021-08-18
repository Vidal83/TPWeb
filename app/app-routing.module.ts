import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearBandaComponent } from './Components/crear-banda/crear-banda.component';
//Componentes
import { ListarBandaComponent } from './Components/listar-banda/listar-banda.component';
const routes: Routes = [
  { path: '', component: ListarBandaComponent },
  { path: 'crear-banda', component: CrearBandaComponent },
  { path: 'editar-banda/:id', component: CrearBandaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
