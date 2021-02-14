import React from 'react';
import { getBackSideCardImgPath} from 'util/cardManager';

interface IProps {
  zIndex: number;
  top: number;
};

export const BackSideCardLayoutPresenter: React.FC<IProps> = (props) => {
  const { zIndex, top } = props;
  const backSideCardPath = getBackSideCardImgPath();
  const style = {
    // as 'absolute' にしないとCSSPropertiesのcompileが通らない
    position: 'absolute' as 'absolute',
    zIndex: zIndex,
    top: top
  };
  return (
    <img src={backSideCardPath} alt={`back-side-card`} style={style}/>
  );
};
