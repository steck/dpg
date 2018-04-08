import {Component, OnInit, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {getPromotions, State} from "../../reducers/index";
import {BlockEditor} from "../../entities/block-editor";
import {PromotionsComponent} from "./promotions.component";
import {BlockType} from "../../entities/block";

@Component({
  selector: 'app-promotions-container',
  template: `
    <app-promotions [promotionState]="promotions | async"></app-promotions>
  `
})
export class PromotionsContainerComponent implements BlockEditor {
  promotions = this.store.select(getPromotions);

  @ViewChild(PromotionsComponent)
  commonInfo: PromotionsComponent;

  constructor(readonly store: Store<State>) { }


  get type(): BlockType{
    return this.commonInfo.type;
  }

  save(id: string) {
    this.commonInfo.save(id);
  }
}
