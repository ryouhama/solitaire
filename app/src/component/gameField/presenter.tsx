import React from 'react';
import { ICard } from 'type/card';
import { Card } from 'component/card';
import { BackSideCard } from 'component/card/backSideCard';
import { patienceSort, randomSort} from 'util/cardManager';
import { CARD_WIDTH_PX, CARD_HEIGHT_PX} from 'util/style';
// import 'style/card.css';

interface IGameFieldPresenter {
  cards: ICard[];
};

export const GameFieldPresenter: React.FC<IGameFieldPresenter> = (props) => {
  const { cards } = props;
  const style = {
    display: 'grid',
    // grid layout
    gridTemplateColumns: `100px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px 1fr`,
    gridTemplateRows: `${CARD_HEIGHT_PX + 10}px ${CARD_HEIGHT_PX*5}px`,
    backgroundColor: '#008000'
  };
  const styleOfFoundationPile = {
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 1,
    gridColumnEnd: 4
  };
  const styleOfDeck = {
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 7,
    gridColumnEnd: 8
  };
  const styleOfTablePile = {
    gridRowStart: 2,
    gridColumnStart: 2,
    gridColumnEnd: 3,
    display: 'grid',
    gridTemplateColumns: `${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px 1fr`,
    gridTemplateLows: `${CARD_HEIGHT_PX}px 1fr`
  };
  const sortedCards = patienceSort(randomSort(cards));

  const renderCardsOnTable = (index: number, cards: ICard[]) => {
    const cardsStyle = {
      gridRowStart: 1,
      gridRowEnd: 2,
      gridColumnStart: index + 1,
      gridColumnEnd: index + 2,
      position: 'relative' as 'relative'
    };
    const cardsLength = cards.length;

    return (
      <div className={`table-pile-${index}`} key={`pile-${index}`} style={cardsStyle}>
        {cards.map((card, idx) => {
          return (
            <>
            {idx === 0 ? (
              <Card
                key={`${card.suit}-${card.number}`}
                card={card}
                zIndex={cardsLength}
                top={cardsLength*20}
              />
              ) : (
                <BackSideCard
                  key={`${card.suit}-${card.number}`}
                  zIndex={idx}
                  top={idx * 20}
                />
              )}
            </>
          );
        })}
      </div>
    );
  };

  return (
    <div className='game-field' style={style}>
      <div className='foundation-pile' style={styleOfFoundationPile}>
        <p>foundation-pie</p>
      </div>
      <div className='deck' style={styleOfDeck}>
        <p>deck</p>
      </div>
      <div className='table-pile' style={styleOfTablePile}>
        {sortedCards.map((card, index) => renderCardsOnTable(index, card))}
      </div>
    </div>
  );
};
