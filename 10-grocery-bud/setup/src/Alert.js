import React, { useEffect } from 'react';

const Alert = ({ alertInfo, showAlert }) => {
  const { msg, type } = alertInfo;

  useEffect(() => {
    const myTimeout = setTimeout(() => {
      showAlert();
    }, 3000);

    return () => clearTimeout(myTimeout);
  });

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
