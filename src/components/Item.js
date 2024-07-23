// components/Item.js

import React from 'react';
import './Item.css';

const Item = ({ item }) => {
  return (
    <div className="item">
      <h2>{item.title}</h2>
      <p>{item.body}</p>
    </div>
  );
};

export default Item;
