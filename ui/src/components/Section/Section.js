/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

// styles
import './style.scss';

export default function Section({ children, className, ...rest }) {
  return (
    <div className={`${className} section`} {...rest}>
      {children}
    </div>
  );
}
