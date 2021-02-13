import React from 'react';
import { GameFieldPresenter } from './presenter';
import { createCardList } from 'util/cardManager';
import { ICard } from 'type/card';
interface IGameField {
  children?: React.ReactNode;
};

export const GameField: React.FC<IGameField> = () => {
  const createCard = (): ICard[] => {
    return createCardList();
  };

  return (
    <GameFieldPresenter
      cards={createCard()}
    />
  );
}