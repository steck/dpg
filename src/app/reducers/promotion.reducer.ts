import {Promotion, PromotionBlock} from "../entities/promotion";
import {PromotionAction, PromotionActions} from "../actions/promotion.actions";
import {CommonActions} from "../actions/common.actions";
import {BlockType} from "../entities/block";

export interface PromotionState {
  promotions: Promotion[];
}

export const initialPromotionState: PromotionState = {
  promotions: [],
};

export function promotionReducer(state: PromotionState = initialPromotionState, action: PromotionActions): PromotionState {
  switch (action.type) {
    case PromotionAction.Add:
      return {
        ...state,
        promotions: [...state.promotions, action.promotion],
      };
    case PromotionAction.Remove:
      return {
        ...state,
        promotions: [...state.promotions, action.promotion],
      };
    case PromotionAction.Reset:
      return initialPromotionState;
    case CommonActions.FromBlock:
      if (action.block.type === BlockType.Promotion) {
        let block = action.block as PromotionBlock;
        return {
          ...state,
          promotions: block.promotions,
        };
      }
  }

  return state;
}
