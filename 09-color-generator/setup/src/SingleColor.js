import React, { useState, useEffect } from 'react';
// import rgbToHex from './utils';

const SingleColor = (props) => {
  const [copyAlert, setCopyAlert] = useState(false);

  const { weight, type, hex } = props;
  // const hexColor = rgbToHex(...rgb);
  const hexColor = '#' + hex;

  const copyHandler = () => {
    navigator.clipboard
      .writeText(hexColor)
      .then(() => {
        setCopyAlert(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    let myTimeout;
    if (copyAlert) {
      myTimeout = setTimeout(() => {
        setCopyAlert(false);
      }, 3000);
    }

    return () => {
      clearTimeout(myTimeout);
    };
  });

  return (
    <article
      className={type === 'shade' ? 'color color-light' : 'color'}
      style={{ backgroundColor: hexColor }}
      onClick={copyHandler}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexColor}</p>

      {copyAlert && <p className='alert'>Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
