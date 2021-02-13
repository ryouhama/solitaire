import { ICard, ISuit } from 'type/card'

const CARD_NUMBER = 13;

export const createCardList = (): ICard[] => {
  let cardList: ICard[] = [];
  getAllSuit().forEach((suit) => {
    cardList = cardList.concat(createOneTypeSuitCardList(suit));
  });
  return cardList;
};

const createOneTypeSuitCardList = (suit: ISuit): ICard[] => {
  const initList = [...Array(CARD_NUMBER)].map((_, k) => k+1);
  return initList.map((num) => ({suit: suit, number: num}));
};

const getAllSuit = (): ISuit[] => {
  return ['heart', 'clover', 'spade', 'diamond'];
}