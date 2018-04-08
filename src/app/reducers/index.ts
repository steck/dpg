import {blockReducer, BlockState} from "./block.reducer";
import {Action, ActionReducerMap, createFeatureSelector} from "@ngrx/store";
import {infoReducer, InfoState} from "./info.reducer";

export interface State {
  blocks: BlockState;
  info: InfoState;
}

export const reducers: ActionReducerMap<State> =  {
  blocks: blockReducer,
  info: infoReducer,
};

export const getInfo = createFeatureSelector<InfoState>("info");
export const getBlocks = createFeatureSelector<BlockState>("blocks");
