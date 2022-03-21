import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./pages/home/home.component";
import { OriginlTextComponent } from "./pages/originl-text/originl-text.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'text', component: OriginlTextComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
