import React from 'react';
import { ICard } from 'type/card';
import { getBackSideCardImgPath} from 'util/cardManager';

interface IProps {
  card: ICard;
  cardPositionStyle: {zIndex: number, top: number};
  onClick: () => void;
};

export const BackSideCardLayoutPresenter: React.FC<IProps> = (props) => {
  const { card, cardPositionStyle, onClick } = props;
  const backSideCardPath = getBackSideCardImgPath();
  const style = {
    // as 'absolute' にしないとCSSPropertiesのcompileが通らない
    position: 'absolute' as 'absolute',
    zIndex: cardPositionStyle.zIndex,
    top: cardPositionStyle.top
  };

  return (
    <div key={`${card.suit}-${card.number}`} 
      style={style}
      onClick={onClick}
      >
      <img src={backSideCardPath} alt={`back-side-card`}/>
    </div>
  );
};
