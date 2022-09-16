import React, { useState, useEffect } from 'react';
// import rgbToHex from './utils';

const SingleColor = (props) => {
  const [copyAlert, setCopyAlert] = useState(false);

  const { weight, type, hex } = props;
  // const hexColor = rgbToHex(...rgb);
  const hexColor = '#' + hex;

  return (
    <article
      className={type === 'shade' ? 'color color-light' : 'color'}
      style={{ backgroundColor: hexColor }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexColor}</p>
    </article>
  );
};

export default SingleColor;
