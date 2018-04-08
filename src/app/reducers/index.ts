import {blockReducer, BlockState} from "./block.reducer";
import {Action, ActionReducerMap} from "@ngrx/store";

export interface State {
  blocks: BlockState;
}

export const reducers: ActionReducerMap<State, Action> = {
  blocks: blockReducer,
};
