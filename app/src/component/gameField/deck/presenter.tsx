import { BackSideCard } from 'component/card/backSideCard';
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
    gridColumnStart: 7,
    gridColumnEnd: 8,
    position: 'relative' as 'relative'
  };

  const renderDeckCard = (card: ICard, index: number) => {
    return (
      <BackSideCard
        card={card}
        zIndex={index + 1}
      />
    );
  };

  return (
    <div className='deck' style={styleOfDeck}>
      {deck.map(renderDeckCard)}
    </div>
  );
};
