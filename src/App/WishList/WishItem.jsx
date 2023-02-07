import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function WishItem({
  id, done, text, onDoneChange,
}) {
  const [age, setAge] = useState(0);
  useEffect(() => {
    let ageInterval;
    if (done) {
      // si el deseo es completado dejo de contar y limpio el intervalo
      setAge(0);
      clearInterval(ageInterval);
    } else {
      // si el deseo no esta completado creo un intervalo que incrementa en 1
      // la edad del deseo cada 1000 milisegundos
      ageInterval = setInterval(() => setAge((a) => a + 1), 1000);
    }
    // la funcion que devuelve return se ejercita cuando se desmonta el componente
    return () => clearInterval(ageInterval);
  }, [done]);
  return (
    <li
      className={classNames('wish-list__item', {
        'wish-list__item--done': done,
        'wish-list__item--warn': age >= 5 && age < 10,
        'wish-list__item--danger': age >= 10,
      })}
    >
      <input
        type="checkbox"
        id={`wish${id}`}
        checked={done}
        onChange={(e) => onDoneChange(e.target.checked)}
      />
      <label
        className="wish-input__label"
        htmlFor={`wish${id}`}
      >
        {text}
      </label>
    </li>
  );
}

// las props se marcan como isRequired o habra que declarar unas props
WishItem.propTypes = {
  done: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.number.isRequired,
  onDoneChange: PropTypes.func,
};

WishItem.defaultProps = {
  done: false,
  text: '',
  onDoneChange: () => { },
};

export default WishItem;
