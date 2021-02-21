import React from 'react';
import { Card } from 'component/card';
import { ICard } from 'type/card';

interface IProps {
  openedDeck: ICard[];
  closedDeck: ICard[];
  onClickOfDeckCard: (card: ICard) => void;
};

export const DeckPresenter: React.FC<IProps> = (props) => {
  const { openedDeck, closedDeck, onClickOfDeckCard } = props;
  const styleOfOpenedDeck = {
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 7,
    gridColumnEnd: 8,
    position: 'relative' as 'relative'
  };
  const styleOfClosedDeck = {
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 8,
    gridColumnEnd: 9,
    position: 'relative' as 'relative'
  };
  const deckLength = closedDeck.length;
  const renderOpenedDeckCard = (card: ICard, index: number) => {
    const cardPositionStyle = {
      zIndex: index + 1,
      top: 0
    };

    return (
      <Card
        card={card}
        cardPositionStyle={cardPositionStyle}
        isOpen={true}
        isTop={index === deckLength - 1}
      />
    );
  };

  const renderClosedDeckCard = (card: ICard, index: number) => {
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
        onClickOfDeckCard={onClickOfDeckCard}
      />
    );
  };

  return (
    <>
      <div className="opened-deck" style={styleOfOpenedDeck}>
        {openedDeck.map(renderOpenedDeckCard)}
      </div>
      <div className='closed-deck' style={styleOfClosedDeck}>
        {closedDeck.map(renderClosedDeckCard)}
      </div>
    </>
  );
};
