import React from 'react';
import { ICard } from 'type/card';
import { BackSideCardLayoutPresenter } from './presenter'

interface IProps {
  card: ICard;
  zIndex?: number;
  top?: number;
}
export const BackSideCardLayout: React.FC<IProps> = (props) => {
  const { card, zIndex, top } = props;

  return (
    <BackSideCardLayoutPresenter
      card={card}
      zIndex={zIndex ? zIndex : 1}
      top={top ? top : 0}
    />
  );
};
