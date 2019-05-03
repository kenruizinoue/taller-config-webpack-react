import React from 'react';

import './CardComponent.pcss';

// class CardComponent extends React.Component {
//   render() {
//     return <div>Card</div>;
//   }
// }

const CardComponent = () => (
  <div className="card">
    <div className="cover">
      <div className="label">DESARROLLO</div>
      <div className="text-box">
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque so</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque so</p>
      </div>
    </div>
    <div className="button-box">
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
    </div>
  </div>
);

export default CardComponent;
