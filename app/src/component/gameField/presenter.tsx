import React from 'react';
import { ICard } from 'type/card';
import { Card } from 'component/card';
import { patienceSort, randomSort} from 'util/cardManager';
// import 'style/card.css';

interface IGameFieldPresenter {
  cards: ICard[];
};

export const GameFieldPresenter: React.FC<IGameFieldPresenter> = (props) => {
  const { cards } = props;
  const style = {backgroundColor: '#008000'};
  const tablePileStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
    gridTemplateLows: '1fr auto'
  };
  const sortedCards = patienceSort(randomSort(cards));

  const renderCardsOnTable = (index: number, cards: ICard[]) => {
    const cardsStyle = {
      gridRow: 2-3,
      gridColumn: `0-${index}`
    };

    return (
      <div key={`pile-${index}`} style={cardsStyle}>
        {cards.map((card) => {
          return (
            <Card key={`${card.suit}-${card.number}`} card={card}/>
          );
        })}
      </div>
    );
  };

  return (
    <div className='game-field' style={style}>
      <div className='foundation-pile'>
        <p>foundation-pile-space</p>
      </div>
      <div className='deck'>
        <p>deck-space</p>
      </div>
      <div className='table-pile' style={tablePileStyle}>
        {sortedCards.map((card, index) => renderCardsOnTable(index, card))}
      </div>
    </div>
  );
}