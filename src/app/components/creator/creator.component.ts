import {Component, OnInit} from '@angular/core';
import {BlockEditor} from "../../entities/block-editor";
import {Store} from "@ngrx/store";
import {State} from "../../reducers/index";
import {IdGeneratorService} from "../../services/id-generator.service";
import {AddBlockAction} from "../../actions/block.actions";
import {BlockType} from "../../entities/block";
import {Router} from "@angular/router";

@Component({
  selector: 'app-creator',
  template: `
    <router-outlet (activate)="onActivate($event)"></router-outlet>
    <div class="container">
      <div class="row">
        <button
          type="button"
          class="btn btn-primary btn-lg"
          (click)="onAdd()">
          Add
        </button>
        <button type="button"
                class="btn btn-secondary btn-lg"
                routerLink="/home">Cancel
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent {
  private blockEditor: BlockEditor;

  constructor(private readonly router: Router,
              private readonly generator: IdGeneratorService,
              private readonly store: Store<State>) {
  }

  onAdd() {
    if (this.blockEditor) {
      const id = this.generator.generateNewId();
      this.store.dispatch(new AddBlockAction({
        type: BlockType.Temp,
        id: id
      }));
      this.blockEditor.save(id);
    }

    this.router.navigate(["/home"]);
  }

  onActivate(editor: BlockEditor) {
    this.blockEditor = editor;
  }
}
