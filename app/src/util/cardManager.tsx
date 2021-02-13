import { ICard, ISuit } from 'type/card'

const CARD_NUMBER = 13;
const PUBLIC_URL = `${process.env.PUBLIC_URL}`;

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
};

export const getCardImgPath = (card :ICard) => {
  return `${PUBLIC_URL}/image/card/${card.suit}/${card.number}.png`
};