import React from 'react';

export const DeckPresenter: React.FC = () => {
  const styleOfDeck = {
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 7,
    gridColumnEnd: 8
  };

  return (
    <div className='deck' style={styleOfDeck}>
      <p>deck</p>
    </div>
  );
};
