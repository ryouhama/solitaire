import React from 'react';
import { ICard } from 'type/card';
import { CARD_WIDTH_PX, CARD_HEIGHT_PX} from 'util/style';
import { FoundationPile } from './foundationPile';
import { Deck } from './deck';
import { TablePile } from './tablePile';
// import 'style/card.css';

interface IGameFieldPresenter {
  deck: ICard[];
  tablePileCards: ICard[][];
};

export const GameFieldPresenter: React.FC<IGameFieldPresenter> = (props) => {
  const { deck, tablePileCards } = props;
  const styleOfGameField = {
    display: 'grid',
    // grid layout
    gridTemplateColumns: `50px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px 1fr`,
    gridTemplateRows: `${CARD_HEIGHT_PX + 10}px ${CARD_HEIGHT_PX*5}px`,
    backgroundColor: '#008000'
  };

  return (
    <div className='game-field' style={styleOfGameField}>
      <FoundationPile/>
      <Deck
        deck={deck}
      />
      <TablePile
        tablePileCards={tablePileCards}
      />
    </div>
  );
};
