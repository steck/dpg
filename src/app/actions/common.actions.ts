import {Action} from "@ngrx/store";
import {Block} from "../entities/block";

export enum CommonActions {
  FromBlock = "[CommonActions] from block",
}

export class FromBlockAction implements Action {
  readonly type = CommonActions.FromBlock;

  constructor(readonly block: Block){
  }
}
