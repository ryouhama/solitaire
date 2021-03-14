import React from 'react';
import { DragElementWrapper, DragSourceOptions } from 'react-dnd';
import { ICard } from 'type/card';
import { getCardImgPath} from 'util/cardManager';

interface IProps {
  card: ICard;
  cardPositionStyle: {
    zIndex: number;
    top: number
  };
  canDraggable: () => boolean;
  drag?: DragElementWrapper<DragSourceOptions>;
};

export const FrontSideCardLayoutPresenter: React.FC<IProps> = (props) => {
  const { card, cardPositionStyle, canDraggable, drag } = props;
  const cardPath = getCardImgPath(card);
  const style = {
    // as 'absolute' にしないとCSSPropertiesのcompileが通らない
    position: 'absolute' as 'absolute',
    zIndex: cardPositionStyle.zIndex,
    top: cardPositionStyle.top
  };

  return (
    <div
      ref={canDraggable() ? drag : undefined}
      key={`${card.suit}-${card.number}`}
      style={style}
    >
      <img src={cardPath} alt={`${card.suit}-${card.number}`}/>
    </div>
  );
};
