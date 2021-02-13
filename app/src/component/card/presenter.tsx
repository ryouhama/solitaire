import React from 'react';
import { ICard } from 'type/card';
import { getCardImgPath} from 'util/cardManager';

interface ICardLayoutPresenter {
  card: ICard;
}
export const CardLayoutPresenter: React.FC<ICardLayoutPresenter> = (props) => {
  const { card } = props;
  const cardPath = getCardImgPath(card);

  return (
    <img src={cardPath} alt={`${card.suit}-${card.number}`} />
  );
}