import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PmkjComponent } from './pmkj/pmkj.component';

const routes: Routes = [{
  path: '', component: AppComponent
},
{path: 'pmkj', component: PmkjComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
