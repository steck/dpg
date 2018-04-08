import {Component, Injector, Input, OnInit} from '@angular/core';
import {BlockInfo,  InfoBlock} from "../../../entities/block";
import {TileComponent} from "../tile/tile.component";

@Component({
  selector: 'app-common-info-tile',
  template: `
    <h5 class="card-title">Common Information</h5>
    <h6 class="card-subtitle mb-2 text-muted">App name, version, etc</h6>
    <p class="card-text">
      App Name: {{block.name}}
      <br />
      Version: {{block.version}}
    </p>
  `,
  styleUrls: ['./common-info.tile.component.scss']
})
export class CommonInfoTileComponent implements OnInit {

  block: InfoBlock;

  constructor(private blockInfo: BlockInfo) {
    this.block = blockInfo.block as InfoBlock;
  }

  ngOnInit() {
  }
}
