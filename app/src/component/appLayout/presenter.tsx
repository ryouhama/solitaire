import React from 'react';

export const AppLayoutPresenter: React.FC = (props) => {
  const { children } = props;

  return (
    <>
      <p>this is sorittire</p>
      {children}
    </>
  );
};
