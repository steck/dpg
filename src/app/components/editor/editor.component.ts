import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {filter, map, tap} from "rxjs/operators";
import {BlockState} from "../../reducers/block.reducer";
import {Store} from "@ngrx/store";
import {getBlocks, State} from "../../reducers/index";
import {FromBlockAction} from "../../actions/common.actions";
import {BlockEditor} from "../../entities/block-editor";
import {AmendBlockAction} from "../../actions/block.actions";

@Component({
  selector: 'app-editor-container',
  template: `
    <app-editor [blockState]="blocks | async"></app-editor>
  `,
  styleUrls: ['./editor.component.scss']
})
export class EditorContainerComponent {
  blocks = this.store.select(getBlocks);

  constructor(readonly store: Store<State>) {
  }
}

@Component({
  selector: 'app-editor',
  template: `
    <router-outlet (activate)='onActivate($event)'></router-outlet>
    <div class="container">
      <div class="row">
        <button type="button"
                class="btn btn-primary btn-lg"
                (click)="onSave()">Save
        </button>
        <button type="button"
                class="btn btn-secondary btn-lg"
                routerLink="/home">Cancel
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  @Input()
  blockState: BlockState;

  private blockEditor: BlockEditor;
  private selectedBlockId: string;

  constructor(private readonly router: Router,
              private readonly store: Store<State>,
              private readonly activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.activeRoute.paramMap
      .pipe(
        map(paramMap => paramMap.get("id")),
        filter(id => !!id))
      .subscribe(id => this.blockSelected(id));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  blockSelected(id: string) {
    console.info(`Selecting block with id ${id}`);
    this.selectedBlockId = id;
    let block = this.blockState.blocks.find(x => x.id === id);
    if (block) {
      this.store.dispatch(new FromBlockAction(block));
    }
  }

  onSave() {
    if (this.selectedBlockId) {
      this.blockEditor.save(this.selectedBlockId);
    }
    this.router.navigate(["/home"]);
  }

  onActivate(editor: BlockEditor) {
    this.blockEditor = editor;
  }
}
