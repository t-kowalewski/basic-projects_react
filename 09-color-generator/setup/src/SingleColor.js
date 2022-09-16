import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = (props) => {
  const { weight, rgb } = props;
  const hexColor = rgbToHex(...rgb);

  return (
    <article style={{ backgroundColor: hexColor }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexColor}</p>
    </article>
  );
};

export default SingleColor;
