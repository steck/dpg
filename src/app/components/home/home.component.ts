import {Component, Input, OnInit} from '@angular/core';
import {State} from "../../reducers/index";
import {Store} from "@ngrx/store";
import {BlockState} from "../../reducers/block.reducer";
import {Block} from "../../entities/block";
import {RemoveBlockAction} from "../../actions/block.actions";

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
    <div class="container">
      <div class="row" *ngFor="let block of blockState?.blocks">
        <div class="card" style="width: 100%;">
          <div class="card-body">
            <app-tile [block]="block"></app-tile>
            
            <a class="card-link"
               [routerLink]="getEditLink(block)">Edit</a>
            <a class="card-link"
               [routerLink]=""
               (click)="onRemove(block)">Remove</a>
          </div>
        </div>
      </div>
      
      <div class="row" *ngIf="!blockState?.blocks.length">
        Nothing to display. Please, add some components
      </div>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @Input()
  blockState: BlockState;

  constructor(readonly store: Store<State>) {
  }

  getEditLink(block: Block) {
    return `/edit/${block.id}/${block.type}`;
  }

  onRemove(block: Block){
    this.store.dispatch(new RemoveBlockAction(block.id));
  }
}
