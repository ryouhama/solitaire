import React, { useState } from 'react';
import { ICard } from 'type/card';
import { DeckPresenter } from './presenter';

interface IProps {
  deck: ICard[];
};

export const Deck: React.FC<IProps> = (props) => {
  const { deck } = props;
  const initState: ICard[] = [];
  const [openedDeck, setOpenedDeck] = useState(initState);
  const [closedDeck, setClosedDeck] = useState(deck);
  const onClickOfDeckCard = (card: ICard) => {
    const newOpenedDeck = openedDeck.map((card) => {return {suit: card.suit, number: card.number}});
    const newClosedDeck = closedDeck.filter((it) => card.suit !== it.suit || card.number !== it.number);
    newOpenedDeck.push(card);
    setOpenedDeck(newOpenedDeck);
    setClosedDeck(newClosedDeck);
  };
  return (
    <DeckPresenter
      openedDeck={openedDeck}
      closedDeck={closedDeck}
      onClickOfDeckCard={onClickOfDeckCard}
    />
  );
};
