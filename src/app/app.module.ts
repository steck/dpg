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
import {IdGeneratorService} from './services/id-generator.service';
import {CommonInfoComponent} from './components/common-info/common-info.component';
import {CreatorComponent} from './components/creator/creator.component';
import {EditorComponent, EditorContainerComponent} from './components/editor/editor.component';
import {CommonInfoContainerComponent} from "./components/common-info/common-info.container.component";
import {CommonInfoTileComponent} from './components/tiles/common-info.tile/common-info.tile.component';
import { TileComponent } from './components/tiles/tile/tile.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeContainerComponent},
  {path: 'shop', component: ShopContainerComponent},

  {
    path: 'create', component: CreatorComponent,
    children: [
      {path: 'info', component: CommonInfoContainerComponent},
    ]
  },

  {
    path: 'edit/:id', component: EditorContainerComponent,
    children: [
      {path: 'info', component: CommonInfoContainerComponent},
    ]
  },

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
    ShopComponent,

    CommonInfoContainerComponent,
    CommonInfoComponent,

    CreatorComponent,

    EditorContainerComponent,
    EditorComponent,
    CommonInfoTileComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),

    // ngrx part
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  providers: [
    IdGeneratorService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
