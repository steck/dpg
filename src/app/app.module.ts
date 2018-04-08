import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {FormsModule} from "@angular/forms";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./reducers";
import {HomeComponent, HomeContainerComponent} from './components/home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {ShopComponent, ShopContainerComponent} from './components/shop/shop.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeContainerComponent},
  {path: 'shop', component: ShopContainerComponent},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,

    HomeContainerComponent,
    HomeComponent,

    ShopContainerComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {}),

    // ngrx part
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
