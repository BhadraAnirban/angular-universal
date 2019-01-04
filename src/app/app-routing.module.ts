import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PmkjComponent } from './pmkj/pmkj.component';
import { ThmaComponent } from './thma/thma.component';
import { PmkjDetailsComponent } from './pmkj-details/pmkj-details.component';

const routes: Routes = [{
  path: '', component: ThmaComponent},
  {path: 'pmkjd/:name', component: PmkjDetailsComponent},
{path: 'pmkj', component: PmkjComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
