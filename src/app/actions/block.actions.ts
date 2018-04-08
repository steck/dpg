import {Block} from "../entities/block";
import {Action} from "@ngrx/store";

export enum BlockAction {
  Add = "[BlockAction] Add",
  Amend = "[BlockAction] Amend",
  Remove = "[BlockAction] Remove",
  Reset = "[BlockAction] Reset",
}

export class AddBlockAction implements Action {
  readonly type = BlockAction.Add;

  constructor(readonly block: Block) {
  }
}

export class RemoveBlockAction implements Action {
  readonly type = BlockAction.Remove;

  constructor(readonly id: string) {
  }
}

export class AmendBlockAction implements Action {
  readonly type = BlockAction.Amend;

  constructor(readonly id: string, readonly block: Partial<Block>) {
  }
}

export class ResetBlockAction implements Action {
  readonly type = BlockAction.Reset;

  constructor() {
  }
}

export type BlockActions = AddBlockAction | RemoveBlockAction | ResetBlockAction | AmendBlockAction;
