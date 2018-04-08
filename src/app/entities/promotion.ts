import {Block, BlockType} from "./block";

export interface Promotion {
  from: string;
  to: string;
}

export interface PromotionBlock extends Block {
  type: BlockType.Promotion,
  promotions: Promotion[],
}
