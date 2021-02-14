import { ICard, ISuit } from 'type/card';


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

export const getCardImgPath = (card :ICard): string => {
  return `${PUBLIC_URL}/image/card/${card.suit}/${card.number}.png`
};

export const patienceSort = (cards: ICard[]): ICard[][] => {
  var sortedArray = [];
  for (var index=0, slicedNum=0; index < 7; cards) {
    const slicedCards = cards.slice(slicedNum, slicedNum+index+1);
    sortedArray.push(slicedCards);
    slicedNum += (index+1);
    index++;
  }
  return sortedArray;
};

export const randomSort = (cards: ICard[]): ICard[] => {
  const deepCopyedCards = cards.map(card => {return {suit: card.suit, number: card.number}});
  return deepCopyedCards.sort(() => {return Math.random() - 0.5});
};