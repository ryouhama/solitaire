import React from 'react';
import { DragElementWrapper, DragSourceOptions } from 'react-dnd';
import { ICard } from 'type/card';
import { getBackSideCardImgPath} from 'util/cardManager';

interface IProps {
  card: ICard;
  cardPositionStyle: {zIndex: number, top: number};
  onClick: () => void;
  drop: DragElementWrapper<DragSourceOptions>
};

export const BackSideCardLayoutPresenter: React.FC<IProps> = (props) => {
  const { card, cardPositionStyle, onClick, drop } = props;
  const backSideCardPath = getBackSideCardImgPath();
  const style = {
    // as 'absolute' にしないとCSSPropertiesのcompileが通らない
    position: 'absolute' as 'absolute',
    zIndex: cardPositionStyle.zIndex,
    top: cardPositionStyle.top
  };

  return (
    <div
      ref={drop}
      key={`${card.suit}-${card.number}`} 
      style={style}
      onClick={onClick}
      >
      <img src={backSideCardPath} alt={`back-side-card`}/>
    </div>
  );
};
