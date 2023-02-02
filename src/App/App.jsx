import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import WishInput from './WishInput';
import WishList from './WishList';

const initialWishes = [
  { id: 0, text: 'Aprobar DWEC', done: false },
  { id: 1, text: 'Ir al cine', done: true },
  { id: 2, text: 'Comer un bocadillo', done: false },
];

function App() {
  // hook useState para guardar estado componente
  const [wishes, setWishes] = useState(initialWishes);
  return (
    <div className="app">
      <Header />
      <WishInput onNewWish={(newWish) => setWishes([newWish, ...wishes])} />
      <WishList wishes={wishes} />

      <button type="button" className="wish-clear">Archive Wishes</button>
    </div>
  );
}

export default App;
