import React from 'react';
import { ICard } from 'type/card';

interface IGameFieldPresenter {
  cards: ICard[];
}

export const GameFieldPresenter: React.FC<IGameFieldPresenter> = (props: IGameFieldPresenter) => {
  const { cards } = props;
  return (
    <>
      <p>this is GameField</p>
      {cards.map((card) => {
        return(
          <>
            <p>{card.suit}</p>
            <p>{card.number}</p>
          </>
        )
      })}
    </>
  );
}