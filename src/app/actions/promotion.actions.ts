import {Action} from "@ngrx/store";
import {FromBlockAction} from "./common.actions";
import {Promotion} from "../entities/promotion";

export enum PromotionAction {
  Add = "[PromotionAction] Add",
  Remove = "[PromotionAction] Remove",
  Reset = "[PromotionAction] Reset",
}

export class AddPromotionAction implements Action {
  readonly type = PromotionAction.Add;

  constructor(readonly promotion: Promotion) {
  }
}

export class RemovePromotionAction implements Action {
  readonly type = PromotionAction.Remove;

  constructor(readonly promotion: Promotion) {
  }
}

export class ResetPromotionAction implements Action {
  readonly type = PromotionAction.Reset;
}

export type PromotionActions = AddPromotionAction | RemovePromotionAction | ResetPromotionAction | FromBlockAction;
