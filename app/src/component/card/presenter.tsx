import React from 'react';
import { ICard } from 'type/card';
import { getCardImgPath} from 'util/cardManager';

interface IProps {
  card: ICard;
  zIndex: number;
  top: number;
};

export const CardLayoutPresenter: React.FC<IProps> = (props) => {
  const { card, zIndex, top } = props;
  const cardPath = getCardImgPath(card);
  const style = {
    // as 'absolute' にしないとCSSPropertiesのcompileが通らない
    position: 'absolute' as 'absolute',
    zIndex: zIndex,
    top: top
  };

  return (
    <img src={cardPath} alt={`${card.suit}-${card.number}`} style={style}/>
  );
};
