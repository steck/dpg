import {Component, Input, OnInit} from '@angular/core';
import {PromotionState} from "../../reducers/promotion.reducer";
import {Promotion, PromotionBlock} from "../../entities/promotion";
import {BlockEditor} from "../../entities/block-editor";
import {BlockType} from "../../entities/block";
import {Store} from "@ngrx/store";
import {State} from "../../reducers/index";
import {RemovePromotionAction} from "../../actions/promotion.actions";
import {AmendBlockAction} from "../../actions/block.actions";

@Component({
  selector: 'app-promotions',
  template: `
    <div class="container">
      <div class="row">
        <h1>Current promotions</h1>
      </div>
      <div class="row" *ngFor="let promotion of promotions">
        <span>{{ promotion.from }} → {{ promotion.to }}</span>
        <span class="glyphicon glyphicon-remove"
              style="cursor: pointer; margin-left: 20px"
              (click)="onRemove(promotion)">X</span>
      </div>

      <div class="form-inline input-part">
        <input type="text" class="form-control" id="inlineFormInput" placeholder="From"
               [(ngModel)]="from">
        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="To"
               [(ngModel)]="to">

        <button type="submit" class="btn btn-primary"
                (click)="onAdd()">Add
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit, BlockEditor {
  promotions: Promotion[] = [];

  from: string;
  to: string;

  @Input()
  promotionState: PromotionState;

  constructor(readonly store: Store<State>) {
  }

  get type(): BlockType {
    return BlockType.Promotion;
  }

  get canAdd(): boolean {
    return !!this.from && !!this.to;
  }

  save(id: string) {
    this.store.dispatch(new AmendBlockAction(id, <Partial<PromotionBlock>>{
      type: this.type,
      promotions: this.promotions,
    }));
  }

  ngOnInit() {
    if (this.promotionState) {
      this.promotions = this.promotionState.promotions;
    }
  }

  onRemove(promotion: Promotion) {
    this.promotions = this.promotions.filter(x => x !== promotion);
  }

  onAdd() {
    if (this.canAdd) {
      let promotion = <Promotion>{
        from: this.from,
        to: this.to,
      };
      this.promotions = [...this.promotions, promotion]
    }
  }
}
