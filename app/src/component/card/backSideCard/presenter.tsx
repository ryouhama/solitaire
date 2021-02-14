import React from 'react';
import { ICard } from 'type/card';
import { getBackSideCardImgPath} from 'util/cardManager';

interface IProps {
  card: ICard;
  zIndex: number;
  top: number;
};

export const BackSideCardLayoutPresenter: React.FC<IProps> = (props) => {
  const { card, zIndex, top } = props;
  const backSideCardPath = getBackSideCardImgPath();
  const style = {
    // as 'absolute' にしないとCSSPropertiesのcompileが通らない
    position: 'absolute' as 'absolute',
    zIndex: zIndex,
    top: top
  };

  return (
    <img src={backSideCardPath} alt={`back-side-card`} key={`${card.suit}-${card.number}`} style={style}/>
  );
};
