import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../reducers/index";
import {IdGeneratorService} from "../../services/id-generator.service";
import {AddBlockAction} from "../../actions/block.actions";
import {BlockType, InfoBlock} from "../../entities/block";

@Component({
  selector: 'app-shop-container',
  template: `
    <app-shop></app-shop>
  `,
})
export class ShopContainerComponent {
  constructor() {
  }
}

@Component({
  selector: 'app-shop',
  template: `
    <div class="container">
      <div class="row">
        <a routerLink="/create/info">
          Create new Generic Info block
        </a>
      </div>
      <div class="row">
        <a routerLink="/create/promotions">
          Create new Promotions block
        </a>
      </div>
    </div>
  `,
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  constructor(readonly store: Store<State>,
              readonly generator: IdGeneratorService) {
  }
}
