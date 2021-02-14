import React from 'react';
import { AppLayoutPresenter } from './presenter'

interface IAppLayout {
  children?: React.ReactNode;
};

export const AppLayout: React.FC<IAppLayout> = (props) => {
  const { children } = props;
  return (
    <AppLayoutPresenter>
      {children}
    </AppLayoutPresenter>
  );
};
