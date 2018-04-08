import {BlockType} from "./block";

export interface BlockEditor {
  type: BlockType;

  save(id: string);
}
