import React from 'react';
import Container from '@material-ui/core/Container';

// styles
import './style.scss';

export default function PageWrapper({ children }) {
  return (
    <Container maxWidth="xs" className="page-wrapper">
      {children}
    </Container>
  );
}
