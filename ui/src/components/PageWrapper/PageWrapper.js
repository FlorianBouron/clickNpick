import React from 'react';

import style from './style.scss';

export default function PageWrapper({ children }) {
  return (
    <div className={style['page-wrapper']}>
      {children}
    </div>
  );
}
