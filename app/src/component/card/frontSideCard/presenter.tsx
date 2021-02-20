import React from 'react';
import { ICard } from 'type/card';
import { getCardImgPath} from 'util/cardManager';

interface IProps {
  card: ICard;
  cardPositionStyle: {zIndex: number, top: number};
};

export const FrontSideCardLayoutPresenter: React.FC<IProps> = (props) => {
  const { card, cardPositionStyle } = props;
  const cardPath = getCardImgPath(card);
  const style = {
    // as 'absolute' にしないとCSSPropertiesのcompileが通らない
    position: 'absolute' as 'absolute',
    zIndex: cardPositionStyle.zIndex,
    top: cardPositionStyle.top
  };

  return (
    <div key={`${card.suit}-${card.number}`} style={style}>
      <img src={cardPath} alt={`${card.suit}-${card.number}`}/>
    </div>
  );
};
