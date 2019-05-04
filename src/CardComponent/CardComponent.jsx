import React from 'react';

import './CardComponent.pcss';

import comment from './comment.svg';
import favorite from './favorite.svg';
import share from './share.svg';

const prod = process.env.PROD_KEY;
const dev = process.env.DEV_KEY;

const llave = process.env.NODE_ENV === 'production' ? prod : dev;

// class CardComponent extends React.Component {
//   render() {
//     return <div>Card</div>;
//   }
// }

const CardComponent = () => (
  <div styleName="card">
    <div styleName="cover">
      <div styleName="label">{llave}</div>
      <div styleName="text-box">
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque so</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque so</p>
      </div>
    </div>
    <div styleName="button-box">
      <img src={comment} alt="comment" />
      <img src={favorite} alt="favorite" />
      <img src={share} alt="share" />
    </div>
  </div>
);

export default CardComponent;
