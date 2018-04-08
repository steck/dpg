import {InfoAction, InfoActions} from "../actions/info.actions";
import {CommonActions} from "../actions/common.actions";
import {BlockType, InfoBlock} from "../entities/block";

export interface InfoState {
  name: string;
  version: string;
}

export const infoInitialState: InfoState = {
  name: "TODO: add app name",
  version: "TODO: add app version",
};

export function infoReducer(state: InfoState = infoInitialState,
                            action: InfoActions): InfoState {
  switch (action.type) {
    case InfoAction.Set:
      return {
        ...state,
        name: action.name,
        version: action.version
      };

    case InfoAction.Reset:
      return infoInitialState;

    case CommonActions.FromBlock:
      if (action.block.type === BlockType.Info) {
        let block = action.block as InfoBlock;
        return {
          ...state,
          name: block.name,
          version: block.version,
        };
      }
  }

  return state;
}
