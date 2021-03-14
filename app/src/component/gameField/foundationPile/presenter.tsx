import React from 'react';
import { DragElementWrapper, DragSourceOptions } from 'react-dnd';
import { CARD_WIDTH_PX, CARD_HEIGHT_PX} from 'util/style';
import { getSetCardImgpath } from 'util/cardManager';
import { ICard } from 'type/card';
import { Card } from 'component/card';


interface IProps {
  piledCards: {
    heart: ICard[];
    clover: ICard[];
    spade: ICard[];
    diamond: ICard[];
  }
  drop: DragElementWrapper<DragSourceOptions>;
};

export const FoundationPilePresenter: React.FC<IProps> = (props) => {
  const { piledCards, drop } = props;

  const styleOfFoundationPile = {
    gridRowStart: 1,
    gridRowEnd: 2,
    gridColumnStart: 1,
    gridColumnEnd: 6,
    display: 'grid',
    gridTemplateColumns: `50px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px 1fr`,
    gridTemplateLows: `${CARD_HEIGHT_PX}px 1fr`
  };
  const renderPiledCard = (suit: string, cards: ICard[], index: number) => {
    const style = {
      gridRowStart: 1,
      gridRowEnd: 2,
      gridColumnStart: 2+index,
      gridColumnEnd: 3+index,
    };
    return (
      <>
        {cards.length === 0 ? (
          <div
            ref={drop}
            style={style}>
            <img src={getSetCardImgpath()} alt={suit}/>
          </div>
        ) : (
          <div
            ref={drop}
            style={style}
          >
            <Card
              card={cards.slice(-1)[0]}
              cardPositionStyle={{zIndex: 0, top: 0}}
              isOpen={true}
              isTop={true}
            />
          </div>
        )}
      </>
    );
  };

  return (
    <div className='foundation-pile' style={styleOfFoundationPile}>
      {renderPiledCard('heart', piledCards.heart, 1)}
      {renderPiledCard('clover', piledCards.clover, 2)}
      {renderPiledCard('diamond', piledCards.diamond, 3)}
      {renderPiledCard('spade', piledCards.spade, 4)}
    </div>
  );
};
