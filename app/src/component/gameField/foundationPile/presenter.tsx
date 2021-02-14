import React from 'react';

export const FoundationPilePresenter: React.FC = () => {
  const styleOfFoundationPile = {
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 1,
    gridColumnEnd: 4
  };
  return (
    <div className='foundation-pile' style={styleOfFoundationPile}>
      <p>foundation-pie</p>
    </div>
  );
};
