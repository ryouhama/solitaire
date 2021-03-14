import React, { useState } from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import { ICard, ICardDragObjectWithType } from 'type/card';
import { FoundationPilePresenter } from './presenter';


export const FoundationPile: React.FC = () => {
  const initState: {
    heart: ICard[],
    clover: ICard[],
    spade: ICard[],
    diamond: ICard[]
  } = {
    heart: [],
    clover: [],
    spade: [],
    diamond: []
  };
  const [piledCards, setPiledCard] = useState(initState);
  const getSomeSuitCardListInPiledCards = (card: ICard): ICard[] => {
    return ((it: ICard) => {
      switch (it.suit) {
        case 'heart':
          return piledCards.heart;
        case 'clover':
          return piledCards.clover;
        case 'spade':
          return piledCards.spade;
        case 'diamond':
          return piledCards.diamond;
      }
    })(card);
  };
  const existInPiledCards = (card: ICard): boolean => {
    return getSomeSuitCardListInPiledCards(card)
      .some((it) => card.number === it.number);
  };
  const pileCard = (card: ICard): void => {
    if (!existInPiledCards(card)) {
      getSomeSuitCardListInPiledCards(card).push(card);
      setPiledCard(piledCards);
    }
    console.log('piledCards', piledCards);
  };
  const [{ isOver }, drop] = useDrop({
    accept: 'card',
    drop: (item: ICardDragObjectWithType, monitor: DropTargetMonitor) => {
      pileCard(item.card);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  });

  return (
    <FoundationPilePresenter
      drop={drop}
      piledCards={piledCards}
    />
  );
};
