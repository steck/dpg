import {Action} from "@ngrx/store";
import {FromBlockAction} from "./common.actions";

export enum InfoAction {
  Set = "[InfoAction] Set",
  Reset = "[InfoAction] Reset",
}

export class SetInfoAction implements Action {
  readonly type = InfoAction.Set;

  constructor(readonly name: string,
              readonly version: string) {
  }
}

export class ResetInfoAction implements Action {
  readonly type = InfoAction.Reset;
}

export type InfoActions = SetInfoAction | ResetInfoAction | FromBlockAction;
