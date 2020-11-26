import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';


import { HomePageComponent } from "./home-page/home-page.component";
import { ChampionsComponent } from './champions/champions.component';
import { ItemsComponent } from "./items/items.component";


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'champions', component: ChampionsComponent },
  { path: 'items', component: ItemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
