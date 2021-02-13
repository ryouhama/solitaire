import React from 'react';
import { ICard } from 'type/card';
import { CardLayoutPresenter } from './presenter'

interface ICardLayout {
  card: ICard;
};

export const CardLayout: React.FC<ICardLayout> = (props) => {
  const { card } = props;

  return (
    <CardLayoutPresenter
      card={card}
    />
  );
}