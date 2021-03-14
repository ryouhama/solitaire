import { DragObjectWithType } from 'react-dnd';


export type ISuit = 'heart' | 'clover' | 'spade' | 'diamond';

export type ICard = {
  suit: ISuit;
  number: number;
};
export type ICardDragObjectWithType = DragObjectWithType & {
  card: ICard;
};
