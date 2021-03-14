import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { ICard } from 'type/card';
import { FrontSideCardLayoutPresenter } from './frontSideCard/presenter';
import { BackSideCardLayoutPresenter } from './backSideCard/presenter';


interface IProps {
  card: ICard;
  cardPositionStyle: {
    zIndex: number,
    top: number
  }
  isOpen: boolean;
  isTop: boolean;
  onClickOfDeckCard?: (card: ICard) => void;
};

export const CardLayout: React.FC<IProps> = (props) => {
  const { card, cardPositionStyle, isOpen, isTop, onClickOfDeckCard } = props;
  const [isOpenStatus, setOpenStatus] = useState(isOpen);
  const [isTopPosition,] = useState(isTop);
  const toggleCard = () => {
    setOpenStatus(!isOpenStatus);
  };
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'card' , card: card},
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  const canDraggable = (): boolean => {
    return isTopPosition && isOpenStatus;
  };
  const canDroppable = () => {
    // dragしているcardが自身のcardの色違い、かつ自身のcardより数字が1少ない
  };
  const onClick = () => {
    if (isTopPosition) {
      toggleCard();
    }
    if (onClickOfDeckCard) {
      onClickOfDeckCard(card);
    }
  };

  return (
    <>
    {isOpenStatus ? (
      <FrontSideCardLayoutPresenter
        card={card}
        cardPositionStyle={cardPositionStyle}
        canDraggable={canDraggable}
        drag={drag}
      />      
    ) : (
      <BackSideCardLayoutPresenter
        card={card}
        cardPositionStyle={cardPositionStyle}
        onClick={onClick}
      />
    )}
    </>
  );
};
