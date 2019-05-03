import React from 'react';

import './CardComponent.pcss';

// class CardComponent extends React.Component {
//   render() {
//     return <div>Card</div>;
//   }
// }

const CardComponent = () => (
  <div styleName="card">
    <div styleName="cover">
      <div styleName="label">DESARROLLO</div>
      <div styleName="text-box">
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque so</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque so</p>
      </div>
    </div>
    <div styleName="button-box">
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
    </div>
  </div>
);

export default CardComponent;
