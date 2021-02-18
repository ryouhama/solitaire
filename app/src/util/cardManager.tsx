import { ICard, ISuit } from 'type/card';


const CARD_NUMBER = 13;
const DISP_TABLE_PILES_COUNT = 7;
const TABLE_PILES_CARD_TOTAL_COUNT = 28;
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

export const getAllSuit = (): ISuit[] => {
  return ['heart', 'clover', 'spade', 'diamond'];
};

export const getCardImgPath = (card :ICard): string => {
  return `${PUBLIC_URL}/image/card/${card.suit}/${card.number}.png`;
};

export const getBackSideCardImgPath = (): string => {
  return `${PUBLIC_URL}/image/card/back-side-card.png`;
};

export const getSetCardImgpath = (): string => {
  return `${PUBLIC_URL}/image/card/set.png`;
};

export const getDeckAndTableCards = (cards: ICard[]): {'tablePile': ICard[][], 'deck': ICard[]} => {
  const randomSortedCards = randomSort(cards);
  // devide deck and table cards
  const deck = randomSortedCards.splice(TABLE_PILES_CARD_TOTAL_COUNT);
  const patienceSorted = patienceSort(randomSortedCards);
  return {'tablePile': patienceSorted, 'deck': deck};
};

export const patienceSort = (cards: ICard[]): ICard[][] => {
  let sortedArray = [];
  for (let index = 0, slicedNum = 0; index < DISP_TABLE_PILES_COUNT; index++) {
    const slicedCards = cards.slice(slicedNum, slicedNum+index+1);
    sortedArray.push(slicedCards);
    slicedNum += index + 1;
  }
  return sortedArray;
};

export const randomSort = (cards: ICard[]): ICard[] => {
  const deepCopyedCards = cards.map(card => {return {suit: card.suit, number: card.number}});
  return deepCopyedCards.sort(() => {return Math.random() - 0.5});
};
