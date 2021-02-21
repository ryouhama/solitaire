import React, { useState } from 'react';
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
  const moveCardToOpenDeck = () => {

  };
  const onClick = () => {
    if (isTopPosition) {
      toggleCard();
      moveCardToOpenDeck();
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
