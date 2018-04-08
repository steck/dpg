export enum BlockType {
  Info = "info",
  Promotion = "promotion",
  Temp = "temp",
}

export interface Block {
  type: BlockType;
  id: string;
}

export class BlockInfo {
  constructor(readonly block: Block) {
  }
}

export interface InfoBlock extends Block {
  type: BlockType.Info;

  name: string;
  version: string;
}

