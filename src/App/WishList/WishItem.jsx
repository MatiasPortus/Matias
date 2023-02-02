import React from 'react';
import PropTypes from 'prop-types';

function WishItem({ text, id, done }) {
  return (
    <li
      key={`wish${id}`}
      className={`wish-list__item
      ${done ? 'wish-list__item--done' : ''}`}
    >
      <input
        type="checkbox"
        id={`wish${id}`}
        checked={done}
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
};

WishItem.defaultProps = {
  done: false,
  text: '',
};
