import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
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
    item: { type: 'card'},
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  const [{ isOver }, drop] = useDrop({
    accept: 'card',
    drop: () => toggleCard(),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  });
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
        drag={drag}
      />      
    ) : (
      <BackSideCardLayoutPresenter
        card={card}
        cardPositionStyle={cardPositionStyle}
        onClick={onClick}
        drop={drop}
      />
    )}
    </>
  );
};
