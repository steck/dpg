import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {getInfo, State} from "../../reducers/index";
import {InfoState} from "../../reducers/info.reducer";
import {version} from "punycode";
import {BlockEditor} from "../../entities/block-editor";
import {BlockType, InfoBlock} from "../../entities/block";
import {AddBlockAction, AmendBlockAction} from "../../actions/block.actions";
import {CommonInfoComponent} from "./common-info.component";


@Component({
  selector: 'app-common-info-container',
  template: `
    <app-common-info [infoState]="info | async"></app-common-info>`,
})
export class CommonInfoContainerComponent implements BlockEditor {

  @ViewChild(CommonInfoComponent)
  commonInfo: CommonInfoComponent;

  info = this.store.select(getInfo);

  constructor(readonly store: Store<State>) {
  }

  get type(): BlockType{
    return this.commonInfo.type;
  }

  save(id: string) {
    this.commonInfo.save(id);
  }

}
