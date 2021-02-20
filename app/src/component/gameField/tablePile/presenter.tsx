import React from 'react';
import { CARD_WIDTH_PX, CARD_HEIGHT_PX} from 'util/style';
import { Card } from 'component/card';
import { ICard } from 'type/card';

interface IProps {
  patienceSortedCards: ICard[][];
}

export const TablePilePresenter: React.FC<IProps> = (props) => {
  const { patienceSortedCards } = props;
  const styleOfTablePile = {
    gridRowStart: 2,
    gridColumnStart: 2,
    gridColumnEnd: 3,
    display: 'grid',
    gridTemplateColumns: `${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px 1fr`,
    gridTemplateLows: `${CARD_HEIGHT_PX}px 1fr`
  };

  const renderCardsOnTable = (index: number, cards: ICard[]) => {
    const styleOfTablePile = {
      gridRowStart: 1,
      gridRowEnd: 2,
      gridColumnStart: index + 1,
      gridColumnEnd: index + 2,
      position: 'relative' as 'relative'
    };
    const cardsLength = cards.length;

    return (
      <div className={`table-pile-${index}`} key={`pile-${index}`} style={styleOfTablePile}>
        {cards.map((card, idx) => {
          const isTop = idx === 0;
          const cardPositionStyle = {
            zIndex: isTop ? cardsLength : idx,
            top: (isTop ? cardsLength : idx ) * 20
          };
          return (
            <Card
              card={card}
              cardPositionStyle={cardPositionStyle}
              isOpen={isTop}
              isTop={isTop}
            />
            );}
          )}
      </div>
    );
  };

  return (
    <div className='table-pile' style={styleOfTablePile}>
      {patienceSortedCards.map((card, index) => renderCardsOnTable(index, card))}
    </div>
  );
};
