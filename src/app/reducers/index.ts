import {blockReducer, BlockState} from "./block.reducer";
import {Action, ActionReducerMap, createFeatureSelector} from "@ngrx/store";
import {infoReducer, InfoState} from "./info.reducer";
import {promotionReducer, PromotionState} from "./promotion.reducer";

export interface State {
  blocks: BlockState;
  info: InfoState;
  promotions: PromotionState;
}

export const reducers: ActionReducerMap<State> =  {
  blocks: blockReducer,
  info: infoReducer,
  promotions: promotionReducer,
};

export const getInfo = createFeatureSelector<InfoState>("info");
export const getBlocks = createFeatureSelector<BlockState>("blocks");
export const getPromotions = createFeatureSelector<PromotionState>("promotions");
