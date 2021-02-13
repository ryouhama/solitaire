import React from 'react';
import { GameFieldPresenter } from './presenter';
import { createCardList } from 'util/cardManager';


export const GameField: React.FC = () => {
  const allCards = createCardList();

  return (
    <GameFieldPresenter
      cards={allCards}
    />
  );
}