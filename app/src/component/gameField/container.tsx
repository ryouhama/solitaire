import React from 'react';
import { GameFieldPresenter } from './presenter';
import { createCardList, getDeckAndTableCards } from 'util/cardManager';


export const GameField: React.FC = () => {
  const allCards = createCardList();
  const deckAndTableCards = getDeckAndTableCards(allCards);

  return (
    <GameFieldPresenter
      deck={deckAndTableCards.deck}
      tablePileCards={deckAndTableCards.tablePile}
    />
  );
};
