import React from 'react';
import { ICard } from 'type/card';
import { TablePilePresenter } from './presenter';

interface IProps {
  tablePileCards: ICard[][];
};

export const TablePile: React.FC<IProps> = (props) => {
  const { tablePileCards } = props;

  return (
    <TablePilePresenter
      patienceSortedCards={tablePileCards}
    />
  );
};
