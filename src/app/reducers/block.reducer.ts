import {Block} from "../entities/block";
import {BlockAction, BlockActions} from "../actions/block.actions";

export interface BlockState {
  blocks: Block[];
}

export const initialBlockState: BlockState = {
  blocks: [],
};

export function blockReducer(state: BlockState = initialBlockState, action: BlockActions): BlockState {
  switch (action.type) {
    case BlockAction.Add:
      return {
        ...state,
        blocks: [...state.blocks, action.block],
      };
    case BlockAction.Remove:
      return {
        ...state,
        blocks: state.blocks.filter(x => x.id !== action.id),
      };
    case BlockAction.Reset:
      return initialBlockState;
  }
}
