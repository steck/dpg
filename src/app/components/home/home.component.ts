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
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Block of type {{ block.type }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
            <a [routerLink]="getEditLink(block)" class="card-link">Edit</a>
            <a style="cursor: pointer" 
               class="card-link"
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
