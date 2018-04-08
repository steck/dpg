import {Component, Input, OnInit} from '@angular/core';
import {State} from "../../reducers/index";
import {Store} from "@ngrx/store";
import {BlockState} from "../../reducers/block.reducer";

@Component({
  selector: 'app-home-container',
  template: `
    <app-home [blockState]="block | async"></app-home>
  `,
})
export class HomeContainerComponent {
  block = this.store.select(x => x.blocks);

  constructor(readonly store: Store<State>) {
  }
}

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>

    <div class="container">
      <div class="row" *ngFor="let block of blockState.blocks">
        {{ block.type }} !!!
      </div>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Input()
  blockState: BlockState;

  constructor() {
  }
}
