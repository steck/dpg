import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {getInfo, State} from "../../reducers/index";
import {InfoState} from "../../reducers/info.reducer";
import {version} from "punycode";
import {BlockEditor} from "../../entities/block-editor";
import {BlockType, InfoBlock} from "../../entities/block";
import {AddBlockAction, AmendBlockAction} from "../../actions/block.actions";

@Component({
  selector: 'app-common-info',
  template: `
    <div class="container">
      <div class="form-group">
        <label for="appName">Application Name</label>
        <input type="text"
               class="form-control"
               id="appName"
               name="appName"
               placeholder="Application Name"
               [(ngModel)]="name">
        <small class="form-text text-muted">Please, provide application name that will be used in template.</small>
      </div>
      <div class="form-group">
        <label for="appVersion">Application Version</label>
        <input type="text"
               class="form-control"
               id="appVersion"
               name="appVersion"
               placeholder="1.0.0"
               [(ngModel)]="version">
        <small class="form-text text-muted">Version of the releasing application. e.g. <strong>2.0.4</strong></small>
      </div>
    </div>
  `,
  styleUrls: ['./common-info.component.scss']
})
export class CommonInfoComponent implements OnInit, BlockEditor {
  type = BlockType.Info;

  @Input()
  infoState: InfoState;

  name: string;
  version: string;

  constructor(readonly store: Store<State>) {
  }

  ngOnInit() {
    this.name = this.infoState.name;
    this.version = this.infoState.version;
  }

  save(id: string) {
    this.store.dispatch(new AmendBlockAction(id, <Partial<InfoBlock>>{
      type: this.type,
      name: this.name,
      version: this.version,
    }))
  }
}
