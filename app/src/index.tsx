import React from 'react';
import ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import './index.css';
import { AppLayout } from './component/appLayout';
import { GameField } from './component/gameField';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <AppLayout>
        <p>this is children</p>
        <GameField />
      </AppLayout>
    </DndProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
