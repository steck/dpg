import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../reducers/index";
import {IdGeneratorService} from "../../services/id-generator.service";
import {AddBlockAction} from "../../actions/block.actions";

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
    <p>
      <a routerLink="/create/info">
        Create new Generic Info block
      </a>

      <br/>
      <button class="btn btn-primary" (click)="addItem($event)">Add item</button>
    </p>
  `,
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  constructor(readonly store: Store<State>,
              readonly generator: IdGeneratorService) {
  }

  addItem($event) {
    this.store.dispatch(new AddBlockAction({
      id: this.generator.generateNewId(),
      type: "info",
    }));
    $event.prefentDefault();
  }
}
