export enum BlockType {
  Info = "info",
  Temp = "temp",
}

export interface Block {
  type: BlockType;
  id: string;
}

export interface InfoBlock extends Block {
  type: BlockType.Info;

  name: string;
  version: string;
}
