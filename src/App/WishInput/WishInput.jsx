import React, { useState } from 'react';
import PropTypes from 'prop-types';

function WishInput({ onNewWish }) {
  // hook del estado, nuevo deseo
  const [newWish, setNewWish] = useState('');
  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">
        New Wish
      </legend>
      <input
        className="wish-input__field"
        type="text"
        placeholder="Write a new wish"
        value={newWish}
        onChange={(e) => setNewWish(e.target.value)}
        onKeyUp={(e) => {
          // si se ha pulsado intro y el nuevo deseo no está vacío
          if (e.key === 'Enter' && newWish.length) {
            // llamamos a la funcion callback pasandole el nuevo objeto deseo
            onNewWish({ text: newWish, done: false, id: new Date().getTime() });
            // reiniciamos el nuevo deseo
            setNewWish('');
          }
        }}
      />
    </fieldset>
  );
}

// Definimos los tipos de datos de las props
WishInput.propTypes = {
  onNewWish: PropTypes.func,
};

WishInput.defaultProps = {
  onNewWish: () => { },
};

export default WishInput;
