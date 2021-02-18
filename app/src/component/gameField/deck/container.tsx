import React from 'react';
import { ICard } from 'type/card';
import { DeckPresenter } from './presenter';

interface IProps {
  deck: ICard[];
};

export const Deck: React.FC<IProps> = (props) => {
  const { deck } = props;
  
  return (
    <DeckPresenter
      deck={deck}
    />
  );
};
