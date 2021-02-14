import React from 'react';
import { ICard } from 'type/card';
import { CardLayoutPresenter } from './presenter'

interface IProps {
  card: ICard;
  zIndex?: number;
  top?: number;
};

export const CardLayout: React.FC<IProps> = (props) => {
  const { card, zIndex, top } = props;

  return (
    <CardLayoutPresenter
      card={card}
      zIndex={zIndex ? zIndex : 1}
      top={top ? top : 0}
    />
  );
};
