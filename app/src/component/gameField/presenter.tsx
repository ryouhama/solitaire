import React from 'react';
import { ICard } from 'type/card';
import { CARD_WIDTH_PX, CARD_HEIGHT_PX} from 'util/style';
import { FoundationPile } from './foundationPile';
import { Deck } from './deck';
import { TablePile } from './tablePile';
// import 'style/card.css';

interface IGameFieldPresenter {
  cards: ICard[];
};

export const GameFieldPresenter: React.FC<IGameFieldPresenter> = (props) => {
  const { cards } = props;
  const styleOfGameField = {
    display: 'grid',
    // grid layout
    gridTemplateColumns: `100px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px ${CARD_WIDTH_PX}px 1fr`,
    gridTemplateRows: `${CARD_HEIGHT_PX + 10}px ${CARD_HEIGHT_PX*5}px`,
    backgroundColor: '#008000'
  };

  return (
    <div className='game-field' style={styleOfGameField}>
      <FoundationPile/>
      <Deck/>
      <TablePile
        cards={cards}
      />
    </div>
  );
};
