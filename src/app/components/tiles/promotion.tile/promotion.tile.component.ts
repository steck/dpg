import {Component, Injector, Input, OnInit} from '@angular/core';
import {BlockInfo,  InfoBlock} from "../../../entities/block";
import {TileComponent} from "../tile/tile.component";
import {PromotionBlock} from '../../../entities/promotion';

@Component({
  selector: 'app-promotion-tile',
  template: `
    <h5 class="card-title">Promotion</h5>
    <h6 class="card-subtitle mb-2 text-muted">From one DAP to another</h6>
    <p class="card-text">
      <span *ngFor="let promotion of block.promotions">
        {{ promotion.from}} → {{ promotion.to }} <br />
      </span>
    </p>
  `,
  styleUrls: ['./promotion.tile.component.scss']
})
export class PromotionTileComponent implements OnInit {
  block: PromotionBlock;

  constructor(private blockInfo: BlockInfo) {
    this.block = blockInfo.block as PromotionBlock;
  }

  ngOnInit() {
  }
}
