import React from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';

function WishList({ wishes, onWishChange }) {
  return (
    <ul className="wish-list">
      {wishes.map(({ text, id, done }, i) => (
        <WishItem
          key={`wish${id}`}
          text={text}
          done={done}
          id={id}
          onDoneChange={(value) => {
            // copio wishes en un array nuevo temporal
            const tempWishes = [...wishes];
            tempWishes[i].done = value;
            onWishChange(tempWishes);
          }}
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
  onWishChange: PropTypes.func,
};

WishList.defaultProps = {
  wishes: [],
  onWishChange: () => { },
};

export default WishList;
