import React from 'react';
import Container from '@material-ui/core/Container';

// styles
import style from './style.scss';

export default function PageWrapper({ children }) {
  return (
    <Container maxWidth="xs" className="page-wrapper">
      <div className={style['page-wrapper']}>{children}</div>
    </Container>
  );
}
