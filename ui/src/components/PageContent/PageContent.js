import React from 'react';

// style
import './style.scss';

export default function PageContent({ children }) {
  return (
    <div className="page-content">
      {children}
    </div>
  );
}
