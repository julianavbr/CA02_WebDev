import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ChocolatesListComponent} from "./chocolates-list/chocolates-list.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'chocolates-list',
    component: ChocolatesListComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
