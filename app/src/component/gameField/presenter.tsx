import React from 'react';
import { ICard } from 'type/card';
import { Card } from 'component/card';

interface IGameFieldPresenter {
  cards: ICard[];
}

export const GameFieldPresenter: React.FC<IGameFieldPresenter> = (props) => {
  const { cards } = props;
  return (
    <>
      <p>this is GameField</p>
      {cards.map((card) => {
        return(
          <div key={`${card.suit}-${card.number}`}>
            <Card card={card}/>
          </div>
        )
      })}
    </>
  );
}