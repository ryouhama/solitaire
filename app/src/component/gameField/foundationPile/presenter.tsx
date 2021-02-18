import React from 'react';
import { CARD_WIDTH_PX, CARD_HEIGHT_PX} from 'util/style';
import { getAllSuit, getSetCardImgpath } from 'util/cardManager';

export const FoundationPilePresenter: React.FC = () => {
  const styleOfFoundationPile = {
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 1,
    gridColumnEnd: 6,
    display: 'grid',
    gridTemplateColumns: `50px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px 1fr`,
    gridTemplateLows: `${CARD_HEIGHT_PX}px 1fr`
  };

  return (
    <div className='foundation-pile' style={styleOfFoundationPile}>
      {getAllSuit().map((suit, i) => {
        const style = {
          gridRowStart: 1,
          gridRowEnd: 2,
          gridColumnStart: 2+i,
          gridColumnEnd: 3+i,
        }
        return (
          <div key={suit} style={style}>
            <img src={getSetCardImgpath()} alt={suit}/>
          </div>
        );
      })}
    </div>
  );
};
