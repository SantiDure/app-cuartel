import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { MiEstadoComponent } from './componentes/estado-lista/mi-estado.component';
import { ListaComponent } from './componentes/estado-lista/lista.component';

const routes: Routes = [
  {path: 'inicio', component:InicioComponent},
  {path:'', redirectTo:'inicio', pathMatch:'full'},
  {path: 'mi-estado', component:MiEstadoComponent},
  {path: 'lista', component:ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
