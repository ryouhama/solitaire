import React from 'react';
import { ICard } from 'type/card';
import { patienceSort, randomSort} from 'util/cardManager';
import { TablePilePresenter } from './presenter';

interface IProps {
  cards: ICard[];
};

export const TablePile: React.FC<IProps> = (props) => {
  const { cards } = props;
  const patienceSortedCards = patienceSort(randomSort(cards));

  return (
    <TablePilePresenter
      patienceSortedCards={patienceSortedCards}
    />
  );
};
