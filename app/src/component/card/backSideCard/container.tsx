import React from 'react';
import { BackSideCardLayoutPresenter } from './presenter'

interface IProps {
  zIndex?: number;
  top?: number;
}
export const BackSideCardLayout: React.FC<IProps> = (props) => {
  const { zIndex, top } = props;

  return (
    <BackSideCardLayoutPresenter
      zIndex={zIndex ? zIndex : 1}
      top={top ? top : 0}
    />
  );
};
