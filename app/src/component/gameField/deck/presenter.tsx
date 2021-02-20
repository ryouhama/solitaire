import { Card } from 'component/card';
import React from 'react';
import { ICard } from 'type/card';

interface IProps {
  deck: ICard[];
};

export const DeckPresenter: React.FC<IProps> = (props) => {
  const { deck } = props;
  const styleOfDeck = {
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 8,
    gridColumnEnd: 9,
    position: 'relative' as 'relative'
  };
  const deckLength = deck.length;

  const renderDeckCard = (card: ICard, index: number) => {
    const cardPositionStyle = {
      zIndex: index + 1,
      top: 0
    };
    return (
      <Card
        card={card}
        cardPositionStyle={cardPositionStyle}
        isOpen={false}
        isTop={index === deckLength - 1}
      />
    );
  };

  return (
    <div className='deck' style={styleOfDeck}>
      {deck.map(renderDeckCard)}
    </div>
  );
};
