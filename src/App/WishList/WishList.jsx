import React from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';

function WishList({ wishes }) {
  return (
    <ul className="wish-list">
      {wishes.map(({ text, id, done }) => (
        <WishItem
          text={text}
          done={done}
          id={id}
        />
      ))}
    </ul>
  );
}

WishList.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    done: PropTypes.bool,
  })),
};

WishList.defaultProps = {
  wishes: [],
};

export default WishList;
