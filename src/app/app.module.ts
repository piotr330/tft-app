import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ChampionsComponent } from './champions/champions.component';
import { TraitsComponent } from './traits/traits.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ChampionsComponent,
    TraitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
